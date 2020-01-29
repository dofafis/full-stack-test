let redisClient = require('../../db/redis')
let rankingApiIntegration = require('../integration/ranking-api')
let catalogApiIntegration = require('../integration/catalog-api')
let async = require('async')

let service = {
    getRecommendedProducts: function (req, res) {
        let recommendedProducts = []
        rankingApiIntegration.getProductRanking(req.query.rankingType, 
            ranking => {
                recommendedProducts = []
                ranking = JSON.parse(ranking)
                async.eachSeries(ranking, 
                    (item, callback) => {
                        redisClient.get(item.recommendedProduct.id)
                            .then(
                                product => {
                                    if(product === null) {
                                        catalogApiIntegration.getProductDetails(item.recommendedProduct.id, 'complete', 
                                            product => {
                                                console.log(item)
                                                product = JSON.parse(product)
                                                redisClient.set(product.id, JSON.stringify(product), 'EX', 60)
                                                if(product.status === 'available')
                                                    recommendedProducts.push(product)
                                                callback()
                                            },
                                            () => {
                                                res.end(JSON.stringify({
                                                    status: 500,
                                                    message: 'Failed to connect to Catalog API, try again later'
                                                }))
                                                callback()
                                            }
                                        )
                                    }else {
                                        recommendedProducts.push(product)
                                        callback()
                                    }
                                }
                            )
                            .catch(
                                error => {
                                    catalogApiIntegration.getProductDetails(item.recommendedProduct.id, 'complete', 
                                        product => {
                                            product = JSON.parse(product)
                                            redisClient.set(product.id, JSON.stringify(product), 'EX', 60)
                                            if(product.status === 'available')
                                                recommendedProducts.push(product)
                                            callback()
                                        },
                                        () => {
                                            res.end(JSON.stringify({
                                                status: 500,
                                                message: 'Failed to connect to Catalog API, try again later'
                                            }))
                                            callback()
                                        }
                                    )
                                }
                            )
                    },
                    () => {
                        res.end(JSON.stringify(recommendedProducts))
                    }
                )
            },
            () => {
                res.end(JSON.stringify({
                    status: 500,
                    message: 'Failed to connect to Ranking API, try again later'
                }))
            }
        )
    }
}

module.exports = service