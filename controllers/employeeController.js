const express = require('express');
const Employee = require('../models/employee');
const ejs = require('ejs');
const path = require('path');
const { storage, upload } = require('../config/multer');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

const employeeGet = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.role === 'admin') {
      const employee = await Employee.find({});
      res.send(employee);
    } else {
      res.send('Restricted access');
    }
  } catch (err) {
    console.log(err);
  }
};

const employeePut = async (req, res) => {
  res.statusCode = 403;
  res.send('Put function is not permitted for this route');
};

const employeePost = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.role === 'admin') {
      const employee = await Employee.create(req.body);
      res.send(employee);
    } else {
      res.send('Restricted access');
    }
  } catch (err) {
    console.log(err);
  }
};

const employeeDelete = async (req, res) => {
  res.statusCode = 403;
  res.send('Delete function is not permitted for this route');
};

const particularEmpGet = async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      const employee = await Employee.findById(req.params.employeeId);
      res.send(employee);
    } else {
      res.send('Restricted access');
    }
  } catch (err) {
    console.log(err);
  }
};

const particularEmpPost = async (req, res) => {
  res.statusCode = 403;
  res.send('Post function is not permitted for this route');
};

const particularEmpPut = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.role !== 'customer') {
      const employee = await Employee.findByIdAndUpdate(
        req.params.employeeId,
        { $set: req.body },
        { new: true }
      );
      res.send(employee);
    } else {
      res.send('Restricted access');
    }
  } catch (err) {
    console.log(err);
  }
};

const particularEmpDelete = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.role == 'admin') {
      const employee = await Employee.findByIdAndRemove(req.params.employeeId);
      res.send('Employee successfully removed');
    } else {
      res.send('Restricted access');
    }
  } catch (err) {
    console.log(err);
  }
};

const uploadResumeGet = (req, res) => {
  if (req.isAuthenticated() && req.user.role == 'employee') {
    res.render('index');
  } else {
    res.send('Restricted access');
  }
};

const uploadResumePost = (req, res) => {
  if (req.isAuthenticated() && req.user.role == 'employee') {
    upload(req, res, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send('Successfully uploaded pdf');
      }
    });
  } else {
    res.send('Restricted access');
  }
};

const uploadResumePut = (req, res) => {
  res.statusCode = 403;
  res.send('Put function is not permitted for this route');
};

const uploadResumeDelete = (req, res) => {
  res.statusCode = 403;
  res.send('Delete function is not permitted for this route');
};

module.exports = {
  employeeGet,
  employeePut,
  employeePost,
  employeeDelete,
  particularEmpGet,
  particularEmpPut,
  particularEmpPost,
  particularEmpDelete,
  uploadResumeGet,
  uploadResumePost,
  uploadResumePut,
  uploadResumeDelete
};
