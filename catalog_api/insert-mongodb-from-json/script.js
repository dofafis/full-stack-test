const fs = require('fs')
const ProductModel = require('../app/models/products')

function getCatalog() {
    let jsonArrayString = '[' + fs.readFileSync('./insert-mongodb-from-json/catalog.json', 'utf-8').split('\n').join(',') + ']'
    let catalog = JSON.parse(jsonArrayString)
    return catalog
}

module.exports = function (startServer) {
    let catalog = getCatalog()

    console.log('Registering products to database...')
    ProductModel.insertMany(catalog)
        .then(
            docs => {
                console.log('Products successfully registered to database.')
                startServer()
            }
        )
        .catch(
            error => {
                console.log('Error while registering products to database. Details:')
                console.log(error)
            }
        )
}
