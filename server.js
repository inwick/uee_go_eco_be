const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    'useNewUrlParser': true
}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//Fuel Tips
const fuelTips = require('./routes/fuelSaverRoutes/fuelSaver-route')
const fuelComments = require('./routes/fuelSaverRoutes/fuelComment-route')

app.use('/FuelTips', fuelTips);
app.use('/FuelComment', fuelComments);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});