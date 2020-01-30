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
                                        console.log('Product details not found on Redis')

                                        catalogApiIntegration.getProductDetails(item.recommendedProduct.id, 'complete', 
                                            product => {
                                                product = JSON.parse(product)
                                                console.log('Connecting to Catalog API instead')
                                                redisClient.set(product.id, JSON.stringify(product), 'EX', 10)
                                                if(product.status.toString().toLowerCase() === 'available')
                                                    recommendedProducts.push(product)
                                                callback()
                                            },
                                            () => {
                                                console.log('Failed to connect to Catalog API')
                                                res.end(JSON.stringify({
                                                    status: 500,
                                                    message: 'Failed to connect to Catalog API, try again later'
                                                }))
                                                callback()
                                            }
                                        )
                                    }else {
                                        console.log('Product details found on Redis')
                                        recommendedProducts.push(product)
                                        callback()
                                    }
                                }
                            )
                            .catch(
                                error => {
                                    catalogApiIntegration.getProductDetails(item.recommendedProduct.id, 'complete', 
                                        product => {
                                            console.log('Error querying Redis, connecting to Catalog API instead')
                                            product = JSON.parse(product)
                                            redisClient.set(product.id, JSON.stringify(product), 'EX', 10)
                                            if(product.status.toString().toLowerCase() === 'available')
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