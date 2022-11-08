const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const waterSaverCommentsScheme = new Schema({
    userId: { type: String, required: true },
    ideaId: { type: String, required: true },
    comment: { type: String, required: true }
}, {
    timestamps: true,
});

const WaterComments = mongoose.model('WaterComments', waterSaverCommentsScheme);

module.exports = WaterComments;