const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fuelCommentScheme = new Schema({
    tipId: { type: String, required: true },
    userId: { type: String, required: true },
    comments: { type: String, required: true },
}, {
    timestamps: true,
});

const FuelComments = mongoose.model('FuelComments', fuelCommentScheme);

module.exports = FuelComments;