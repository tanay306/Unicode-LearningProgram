const express = require("express");

const indexGet = (req, res) => {
    res.send("Welcome to project router");
};

const indexPost = (req, res) => {
    res.send("Post function is not permitted for this route");
};

const indexPut = (req, res) => {
    res.send("Put function is not permitted for this route");
};

const indexDelete = (req, res) => {
    res.send("Delete function is not permitted for this route");
};

module.exports = {
    indexGet,
    indexPost,
    indexPut,
    indexDelete
}