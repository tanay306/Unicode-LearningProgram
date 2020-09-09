const express = require("express");
const Project = require("../models/projects");
const projectRouter = express.Router();

////////////////////----- Route for projects -----////////////////////

projectRouter.route("/")
  .get(async (req, res) => {
    try {
      const projects = await Project.find().populate("customer employee");
      res.send(projects);
    } catch (err) {
      console.log(err);
    }
  })
  .post(async (req, res) => {
    try {
      const project = await Project.create(req.body);
      res.send(project);
    } catch (err) {
      console.log(err);
    }
  })
  .put(async (req, res) => {
    res.send("Put function is not permitted for this route");
  })
  .delete(async (req, res) => {
    res.send("Delete function is not permitted for this route")
  });

////////////////////----- Route for particular project  -----////////////////////

projectRouter.route("/:projectId")
  .get(async (req, res) => {
    try {
      const project = await Project.findById(req.params.projectId).populate("customer employee");
      res.send(project);
    } catch (err) {
      console.log(err);
    }
  })
  .post(async (req, res) => {
    res.send("Post function is not permitted for this route")
  })
  .put(async (req, res) => {
    try {
      const project = await Project.findByIdAndUpdate(req.params.projectId, {$set: req.body}, {new:true});
      res.send(project);
    } catch (err) {
      console.log(err);
    }
  })
  .delete(async (req, res) => {
    try {
      const project = await Project.findByIdAndRemove(req.params.projectId);
      res.send("Employee successfully removed");
    } catch (err) {
      console.log(err);
    }
  });

module.exports = projectRouter;
