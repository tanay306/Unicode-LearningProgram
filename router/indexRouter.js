const express = require('express');
const indexRouter = express.Router();
const {
  indexGet,
  indexPost,
  indexPut,
  indexDelete,
} = require('../controllers/indexController');

////////////////////----- Route for index -----////////////////////

indexRouter
  .route('/')
  .get(indexGet)
  .post(indexPost)
  .put(indexPut)
  .delete(indexDelete);

////////////////////----- Export index router -----////////////////////

module.exports = indexRouter;
