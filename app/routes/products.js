let Router = require('express').Router()
let middleware = require('../middlewares/products')
let service = require('../services/products')

Router.route('search/:id')
    .get([middleware.validate], service.getProductById)
