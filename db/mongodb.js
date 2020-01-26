const Mongoose = require('mongoose')

// Connection URL
const url = 'mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DBNAME}' || 'mongodb://root:suasenha@localhost:27017/catalog'

Mongoose.connect(url)

module.exports = Mongoose