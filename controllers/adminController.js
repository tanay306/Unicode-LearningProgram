const express = require('express');
const ejs = require('ejs');
const path = require('path');
const { storage, upload } = require('../config/multer');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

const getResumeGet = (req, res) => {
  if (req.isAuthenticated() && req.user.role == 'admin') {
    res.render('getResume');
  } else {
    res.send('Restricted access');
  }
};

const getResumePost = (req, res) => {
  const fileName = req.body.id;
  if (req.isAuthenticated() && req.user.role == 'admin') {
    upload(req, res, (err) => {
      if (err) {
        res.render('index', {
          msg: err,
        });
      } else {
        res.render('index', {
          msg: 'Successful in retreiving file!',
          file: `public/uploads/${fileName}.pdf`,
        });
      }
    });
  } else {
    res.send('restricted access');
  }
};

module.exports = {
  getResumeGet,
  getResumePost,
};
