let redisClient = require('../../db/redis')
let ProductModel = require('../models/products')

let service = {
    getProductById: function (req, res) {
        redisClient.get(req.params.id.toString())
            .then(
                product => {
                    if(product === null) {
                        ProductModel.find({id: req.params.id.toString()}, function(err, product) {
                            console.log('MongoDB')
                            if(err)
                                res.end(JSON.stringify(err))
                            else if(product.length > 0){
                                redisClient.set(product[0].id, JSON.stringify(product[0]), 'EX', 60)
                                
                                if(req.query.searchType === 'compact')
                                    res.end(JSON.stringify({
                                        name: product[0].name,
                                        price: product[0].price,
                                        status: product[0].status,
                                        categories: product[0].categories
                                    }))
                                else
                                    res.end(JSON.stringify(product[0]))
                            }
                            else
                                res.end(JSON.stringify({
                                    status: 400,
                                    message: 'There is no product with the given id'
                                }))
                        })
                    }else{
                        console.log('Redis')
                        product = JSON.parse(product)
                        if(req.query.searchType === 'compact')
                            res.end(JSON.stringify({
                                name: product.name,
                                price: product.price,
                                status: product.status,
                                categories: product.categories
                            }))
                        else
                            res.end(JSON.stringify(product))
                        }
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