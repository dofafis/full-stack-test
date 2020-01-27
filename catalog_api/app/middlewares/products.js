module.exports = {
    validate: function(req, res, next) {
        if(typeof(req.params.id) === 'undefined')
            res.end(JSON.stringify({
                status: 400,
                message: 'The url parameter \'id\' is required.'
            }))
        else
            next()
    }
}