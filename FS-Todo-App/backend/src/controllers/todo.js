'use strict'

const Todo = require('../models/todo')

module.exports = {
    list: async (req, res) => {

        const data = await Todo.find({});
        res.status(200).send({
            isError: false,
            data,
        });
    },

    create: async (req, res) => {

        const data = await Todo.create(req.body);
        res.status(201).send({
            isError: false,
            data,
        });
    },

    read: async (req, res) => {
        // const idIsValid = mongoose.Types.ObjectId.isValid(req.params.id);
        // if (!idIsValid) throw new CustomError("Id is not valid!", 400);

        const data = await Todo.findOne({ _id: req.params.id });
        res.status(200).send({
            isError: false,
            data,
        });
    },

    update: async (req, res) => {
        // const idIsValid = mongoose.Types.ObjectId.isValid(req.params.id);
        // if (!idIsValid) throw new CustomError("id is not valid", 400);

        const data = await Todo.updateOne({ _id: req.params.id }, req.body, { runValidators: true, });

        res.status(202).send({
            isError: false,
            data,
            updated: await Todo.findOne({ _id: req.params.id })
        });
    },

    delete: async (req, res) => {
        // const idIsValid = mongoose.Types.ObjectId.isValid(req.params.id);
        // if (!idIsValid) throw new CustomError("id is not valid", 400);

        const data = await Todo.deleteOne({ _id: req.params.id });

        
        if (!data.deletedCount) throw new CustomError("Not Deleted", 409);

        res.status(204).send({
            isError: false,
            data
        });
    },
}