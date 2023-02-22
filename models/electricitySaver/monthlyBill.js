const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const monthlyBillScheme = new Schema(
  {
    month: { type: String, required: true },
    units: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ElectricitySaver = mongoose.model('ElectricitySaver', monthlyBillScheme);

module.exports = ElectricitySaver;
