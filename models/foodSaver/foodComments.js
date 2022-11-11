const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodCommentScheme = new Schema({
    tipId: { type: String, required: true },
    userId: { type: String, required: true },
    comment: { type: String, required: true },
}, {
    timestamps: true,
});

const FoodComments = mongoose.model('foodComments', foodCommentScheme);

module.exports = FoodComments;