const express = require('express');

const reservController = require("../controllers/reservation.js");
const reservRouter = express.Router();

reservRouter.use("/reservation", reservController.add_reserv);


module.exports = reservRouter;