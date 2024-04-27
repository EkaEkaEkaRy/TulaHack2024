const express = require('express');

const userController = require("../controllers/user.js");
const userRouter = express.Router();

userRouter.use("/user", userController.add_user);
userRouter.use("/user", userController.find_user);


module.exports = userRouter;