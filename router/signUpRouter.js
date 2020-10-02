const express = require('express');
const signUpRouter = express.Router();
const {
  signUpGet,
  signUpPost,
  signUpPut,
  signUpDelete,
} = require('../controllers/signUpController');

////////////////////----- Route for sign up -----////////////////////

signUpRouter
  .route('/')
  .get(signUpGet)
  .post(signUpPost)
  .put(signUpPut)
  .delete(signUpDelete);

////////////////////----- Export sign up  router -----////////////////////

module.exports = signUpRouter;
