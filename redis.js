let Redis = require('ioredis')

let client = new Redis({
    port: 6379, 
    host: 'redis',
    password: 'suasenha',
    db: 0
})

module.exports = client