let Router = require('express').Router()
let middleware = require('../middlewares/products')
let service = require('../services/products')

Router.route('/recommended')
    .get(middleware.validate, service.getRecommendedProducts)

module.exports = Router