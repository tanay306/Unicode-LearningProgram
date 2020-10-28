const express = require('express');
const ejs = require('ejs');
const path = require('path');
const adminRouter = express.Router();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

const {
  getResumeGet,
  getResumePost,
  getResumePut,
  getResumeDelete
} = require('../controllers/adminController');

////////////////////----- Route for admin to get resume -----////////////////////

adminRouter.route('/getResume')
  .get(getResumeGet)
  .post(getResumePost)
  .put(getResumePut)
  .delete(getResumeDelete);

////////////////////----- Export admin router -----////////////////////

module.exports = adminRouter;
