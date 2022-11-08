const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fuelSaverScheme = new Schema({
    userId: { type: String },
    image: { type: String, required: true },
    tipTitle: { type: String, required: true },
    tipDescription: { type: String, required: true },
}, {
    timestamps: true,
});

const Fuel = mongoose.model('FuelSaver', fuelSaverScheme);

module.exports = Fuel;