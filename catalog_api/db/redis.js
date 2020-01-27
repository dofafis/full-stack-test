let Redis = require('ioredis')

let options = {
    port: process.env.REDIS_PORT || 6379, 
    host: process.env.REDIS_HOST || 'redis',
    password: process.env.REDIS_PASSWORD || 'suasenha',
    db: 0
}

console.log(JSON.stringify(options))
let client = new Redis(options)

module.exports = client