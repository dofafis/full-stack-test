let Router = require('express').Router()
let middleware = require('../middlewares/products')
let service = require('../services/products')

Router.route('/:id')
    .get(middleware.validate, service.getProductById)

module.exports = Router