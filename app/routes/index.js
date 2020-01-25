module.exports = function(app) {
    let products = require('./products')
    
    app.use('/products', products)
}