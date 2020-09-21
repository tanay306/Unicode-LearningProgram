const express = require("express");
const indexRouter = express.Router();
const indexController = require("../controllers/indexController");

////////////////////----- Route for index -----////////////////////

indexRouter.route("/")
    .get(indexController.indexGet)
    .post(indexController.indexPost)
    .put(indexController.indexPut)
    .delete(indexController.indexDelete);

////////////////////----- Export project router -----////////////////////

module.exports = indexRouter;


