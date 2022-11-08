const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSaverScheme = new Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    video: { type: String, required: true },
    image: { type: String, required: true },
}, {
    timestamps: true,
});

const Food = mongoose.model('FoodSaver', foodSaverScheme);

module.exports = Food;