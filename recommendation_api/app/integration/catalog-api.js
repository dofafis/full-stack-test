let request = require('request')

module.exports = {
    getProductDetails: function(product_id, searchType, onSuccess, onError) {
        let url = process.env.CATALOG_API_URL + '/products/' + product_id + '?searchType=' + searchType

        request.get(url, function(error, response, body) {
            if(error || response.statusCode !== 200)
                onError()
            else if(response.statusCode === 200)
                onSuccess(body)
        })
    }
}

