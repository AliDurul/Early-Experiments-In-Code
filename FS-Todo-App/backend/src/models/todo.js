'use strict'

const { Schema, model } = require('mongoose');


const PRIORITIES = {
    Low: "Low",
    Medium: "Medium",
    High: "High",
};

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255
    },
    isDone: {
        type: Boolean,
        default: false
    },
    priority: {
        type: String,
        enum: {
            values: Object.values(PRIORITIES),
            message: 'Invalid priority value'
        },
        default: 'Medium'
    }

}, {
    collection: 'todos',
    timestamps: true
});


todoSchema.set("toJSON", {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      // ret.createdAt = ret.createdAt.toLocaleString("tr-tr");
    },
  });

module.exports = model('Todo', todoSchema);