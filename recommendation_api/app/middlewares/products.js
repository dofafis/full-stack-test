module.exports = {
    validate: function(req, res, next) {
        if(typeof(req.query.rankingType) === 'undefined')
            res.end(JSON.stringify({
                status: 400,
                message: 'The parameter \'rankingType\' is required'
            }))
        else if(typeof(req.query.maxProducts) === 'undefined')
            res.end(JSON.stringify({
                status: 400,
                message: 'The parameter \'maxProducts\' is required'
            }))
        else if(req.query.rankingType !== 'mostpopular' && req.query.rankingType !== 'pricereduction')
            res.end(JSON.stringify({
                status: 400,
                message: 'The parameter \'rankingType\' only accepts the values: \'mostpopular\' and \'pricereduction\''
            }))
        else if(parseInt(req.query.maxProducts) < 10)
            res.end(JSON.stringify({
                status: 400,
                message: 'The parameter \'maxProducts\' only accepts values greater or equal to 10'
            }))
        else
            next()
    }
}
