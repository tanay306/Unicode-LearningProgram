const express = require("express");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const User = require("../models/user");
const signUpRouter = express.Router();
const signUpController = require("../controllers/signUpController");

////////////////////----- Route for sign up -----////////////////////

signUpRouter.route("/")
  .get(signUpController.signUpGet)
  .post(signUpController.signUpPost)
  .put(signUpController.signUpPut)
  .delete(signUpController.signUpDelete);

////////////////////----- Export sign up  router -----////////////////////

module.exports = signUpRouter;
