'use strict'

const { Types: { ObjectId } } = require("mongoose");
const CustomError = require('../helper/customError')

module.exports = (req, res, next) => {

    const isIdValid = ObjectId.isValid(req.params.id);

    if (!isIdValid) throw new CustomError("Id is not valid", 400);

    next();
}
