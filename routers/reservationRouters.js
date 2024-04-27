const express = require('express');

const reservController = require("../controllers/reservation.js");
const reservRouter = express.Router();

reservRouter.use("/reservation", reservController.add_reserv);
reservRouter.use("/reservation", reservController.find_reserv);
reservRouter.use("/tablecount", reservController.find_max_count_table);
reservRouter.use("/roomcount", reservController.find_max_count_room);

module.exports = reservRouter;