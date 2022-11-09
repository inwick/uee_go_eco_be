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

//Fuel Saver
const fuelTips = require('./routes/fuelSaverRoutes/fuelSaver-route')
const fuelComments = require('./routes/fuelSaverRoutes/fuelComment-route')

//Water Tips
const waterTips = require('./routes/waterSaverRoutes/waterSaver-routes')
const waterComments = require('./routes/waterSaverRoutes/waterSaverComments-routes')

//Food Saver
const foodRouter = require('./routes/foodSaverRoutes/foodSaver-route')
const foodCommentRoute = require('./routes/foodSaverRoutes/foodComment-route')

// Food Saver
app.use('/FoodSaver', foodRouter);
app.use('/FoodSaver-comment', foodCommentRoute);

// Fuel Saver
app.use('/FuelTips', fuelTips);
app.use('/FuelComment', fuelComments);

//Water Saver
app.use('/WaterTips', waterTips);
app.use('/WaterComments', waterComments);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});