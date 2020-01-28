let redisClient = require('../../db/redis')
let rankingApiIntegration = require('../integration/ranking-api')
let catalogApiIntegration = require('../integration/catalog-api')

let service = {
    getRecommendedProducts: function (req, res) {
        rankingApiIntegration.getProductRanking(req.query.algorithmType, 
            body => {
                console.log('Finish Later')
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