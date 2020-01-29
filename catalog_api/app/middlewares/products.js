module.exports = {
    validate: function(req, res, next) {
        if(typeof(req.params.id) === 'undefined')
            res.end(JSON.stringify({
                status: 400,
                message: 'The url parameter \'id\' is required.'
            }))
        else if(typeof(req.query.searchType) === 'undefined')
            res.end(JSON.stringify({
                status: 400,
                message: 'The \'searchType\' parameter is required'
            }))
        else if(req.query.searchType !== 'compact' && req.query.searchType !== 'complete')
            res.end(JSON.stringify({
                status: 400,
                message: 'The \'searchType\' parameter only accepts the values: \'compact\' and \'complete\''
            }))
        else
            next()
    }
}