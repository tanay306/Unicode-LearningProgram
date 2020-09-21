const express = require("express");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const User = require("../models/user");
const signOutRouter = express.Router();
const signOutController = require("../controllers/signOutController");

////////////////////----- Route for sign in -----////////////////////

signOutRouter.route("/")
  .get(signOutController.signOutGet)
  .post(signOutController.signOutPost)
  .put(signOutController.signOutPut)
  .delete(signOutController.signOutDelete);

////////////////////----- Export sign in  router -----////////////////////

module.exports = signOutRouter;
