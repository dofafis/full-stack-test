let Redis = require('ioredis')

let client = new Redis({
    port: process.env.REDIS_PORT || 6379, 
    host: process.env.REDIS_HOST || 'redis',
    password: process.env.REDIS_PASSWORD || 'suasenha',
    db: 0
})

module.exports = client