let express = require('express')

let server = require('./app/server.js')

let connectToMongoDb = require('./db/mongodb')
connectToMongoDb(function() {
    server(express, process.env.PORT || 3000)
}, process.env.INSERT_PRODUCTS)