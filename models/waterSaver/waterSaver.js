const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const waterSaverScheme = new Schema({
    userId: { type: String, required: true },
    image: { type: String, required: true },
    tipTitle: { type: String, required: true },
    tipDescription: { type: String, required: true },
    tipCategory: { type: String, required: true },
}, {
    timestamps: true,
});

const Water = mongoose.model('WaterSaver', waterSaverScheme);

module.exports = Water;