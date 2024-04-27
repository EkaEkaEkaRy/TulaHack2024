const express = require('express');

const restaurantController = require("../controllers/restaurant.js");
const restaurantRouter = express.Router();

restaurantRouter.use("/restaurant", restaurantController.find_ad);


module.exports = restaurantRouter;