module.exports = function(startServer, insertProductsToDatabase) {
    const Mongoose = require('mongoose')
    const assert = require('assert')

    // Connection URL
    const url = 'mongodb://' + process.env.MONGODB_HOST + '/' + process.env.MONGODB_DBNAME || 'mongodb://mongo/catalog'

    Mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        auth: {
            authSource: "admin"
        },
        user: process.env.MONGODB_USER,
        pass: process.env.MONGODB_PASSWORD
    })
    .then(
        res => {
            console.log('Connected to MongoDB.')
            console.log(insertProductsToDatabase)
            if(insertProductsToDatabase === '1')
                require('../insert-mongodb-from-json/script')(startServer)
            else
                startServer()
        }
    )
    .catch(
        error => {
            console.log(error)
        }
    )    
}