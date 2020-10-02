const express = require('express');
const signInRouter = express.Router();
const {
  signInGet,
  signInPost,
  signInPut,
  signInDelete,
} = require('../controllers/signInController');

////////////////////----- Route for sign in -----////////////////////

signInRouter
  .route('/')
  .get(signInGet)
  .post(signInPost)
  .put(signInPut)
  .delete(signInDelete);

////////////////////----- Export sign in  router -----////////////////////

module.exports = signInRouter;
