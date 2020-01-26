const fs = require('fs')
const  = require('../app/models')

function getCatalog() {
    let jsonArrayString = '[' + fs.readFileSync('./insert-redis-from-json/catalog.json', 'utf-8').split('\n').join(',') + ']'
    let catalog = JSON.parse(jsonArrayString)
    return catalog
}

function persistProductsFromCatalog() {
    let catalog = getCatalog()
    
}

module.exports = persistProductsFromCatalog