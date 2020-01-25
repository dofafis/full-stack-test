let Redis = require('ioredis')
let client = new Redis()

let service = {
    getProductById: function (req, res) {
        console.log(req.params.id)
        res.end(req.params.id)
    }
}