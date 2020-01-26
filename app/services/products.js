let redisClient = require('../../db/redis')

let service = {
    getProductById: function (req, res) {
        console.log(req.params.id)
        redisClient.get(req.params.id)
            .then(
                product => {
                    res.end(JSON.stringify(product))
                }
            )
            .catch(
                error => {
                    res.end(JSON.stringify(error))
                }
            )
    }
}

module.exports = service