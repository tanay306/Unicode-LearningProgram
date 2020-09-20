const express = require("express");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const User = require("../models/user");
const signInRouter = express.Router();
const signInController = require("../controllers/signInController");

////////////////////----- Route for sign in -----////////////////////

signInRouter.route("/")
  .get(signInController.signInGet)
  .post(signInController.signInPost)
  .put(signInController.signInPut)
  .delete(signInController.signInDelete);

////////////////////----- Export sign in  router -----////////////////////

module.exports = signInRouter;
