'use strict'

module.exports = (err, req, res, next) => {
    const statusCode = err.statusCode || res.statusCode || 500;
    return res.status(statusCode).send({
        error: true,
        message: err.message,
        cause: err.cause,
        body: req.body
    })
}