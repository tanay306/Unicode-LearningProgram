const express = require('express');
const signOutRouter = express.Router();
const {
  signOutGet,
  signOutPut,
  signOutPost,
  signOutDelete,
} = require('../controllers/signOutController');

////////////////////----- Route for sign out -----////////////////////

signOutRouter
  .route('/')
  .get(signOutGet)
  .post(signOutPost)
  .put(signOutPut)
  .delete(signOutDelete);

////////////////////----- Export sign out router -----////////////////////

module.exports = signOutRouter;
