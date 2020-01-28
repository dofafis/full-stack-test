let request = require('request')

//'https://wishlist.neemu.com/onsite/impulse-core/ranking/'

module.exports = {
    getProductRanking: function(algorithmType, onSuccess, onError) {
        url = process.env.RANKING_API_URL + algorithmType + '.json'

        request.get(url, function(error, response, body) {
            if(error || response.statusCode !== 200)
                onError()
            else if(response.statusCode === 200)
                onSuccess(body)
        })
    }
}
