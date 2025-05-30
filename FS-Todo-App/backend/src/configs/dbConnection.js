'use strict'

const { connect } = require('mongoose');

module.exports = () => {

    if (!process.env?.MONGODB) throw new Error('MongoDB URL is not provided');

    connect(process.env.MONGODB)
        .then(() => console.log('--Connected to DB--'))
        .catch((err) => console.log('* Failed to connect to DB * ', err))

}

F