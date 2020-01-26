let express = require('express')

let server = require('./app/server.js')

let insertMongoDBFromJson = require('./insert-mongodb-from-json/script')
insertMongoDBFromJson()

server(express, process.env.PORT || 3000)