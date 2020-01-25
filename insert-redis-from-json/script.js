const fs = require('fs')
const redisClient = require('../redis')

function getCatalog() {
    let jsonArrayString = '[' + fs.readFileSync('./insert-redis-from-json/catalog.json', 'utf-8').split('\n').join(',') + ']'
    let catalog = JSON.parse(jsonArrayString)
    return catalog
}

function persistProductsFromCatalog() {
    let catalog = getCatalog()
    catalog.forEach(product => {
        console.log(product)
        redisClient.set(product.id, JSON.stringify(product))
    })
}

persistProductsFromCatalog()