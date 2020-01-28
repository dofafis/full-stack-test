let express = require('express')

let server = require('./app/server')

server(express, process.env.PORT)