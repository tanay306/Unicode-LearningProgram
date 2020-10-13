const express = require('express');
const ejs = require('ejs');
const path = require('path');
const adminRouter = express.Router();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

////////////////////----- Route for admin to get resume -----////////////////////

const {
  getResumeGet,
  getResumePost,
} = require('../controllers/adminController');

adminRouter.route('/getResume').get(getResumeGet).post(getResumePost);

////////////////////----- Export admin router -----////////////////////

module.exports = adminRouter;
