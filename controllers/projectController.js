const express = require("express");
const Project = require("../models/projects");

const projectGet = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.role === "admin") {
      const projects = await Project.find().populate("customer employee");
      res.send(projects);
    } else {
      res.send("Restricted access");
    }
  } catch (err) {
    console.log(err);
  }
};

const projectPost = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.role === "admin") {
      const project = await Project.create(req.body);
      res.send(project);
    } else {
      res.send("Restricted access");
    }
  } catch (err) {
    console.log(err);
  }
};

const projectPut = async (req, res) => {
  res.send("Put function is not permitted for this route");
};

const projectDelete = async (req, res) => {
  res.send("Delete function is not permitted for this route");
};

const particularProjectGet = async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      const project = await Project.findById(req.params.projectId).populate("customer employee");
      res.send(project);
    } else {
      res.send("Restricted access");
    }
  } catch (err) {
    console.log(err);
  }
};

const particularProjectPost = async (req, res) => {
    res.send("Post function is not permitted for this route");
};

const particularProjectPut = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.role === "admin") {
      const project = await Project.findByIdAndUpdate(req.params.projectId, {$set: req.body}, {new:true});
      res.send(project);
    } else {
      res.send("Restricted access");
    }
  } catch (err) {
    console.log(err);
  }
};

const particularProjectDelete = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.body.role === "admin") {
      const project = await Project.findByIdAndRemove(req.params.projectId);
      res.send("Employee successfully removed");
    } else {
      res.send("Restricted access");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  projectGet,
  projectPost,
  projectDelete,
  projectPut,
  particularProjectGet,
  particularProjectPost,
  particularProjectPut,
  particularProjectDelete
};
