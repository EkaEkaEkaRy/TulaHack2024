const express = require('express');

const Controller = require("../controllers/user.js");
const Router = express.Router();

Router.use("/user", Controller.add_user);
Router.use("/user", Controller.find_user);


module.exports = Router;