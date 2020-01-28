module.exports = function(express, port) {
    let cors = require('cors')
    let setRoutes = require('./routes/index')
    let app = express()

    app.use(cors())
    app.use(express.json())

    setRoutes(app)

    app.listen(port, function () {
        console.log('Recommendation API running on port ' + port)
    })
}
