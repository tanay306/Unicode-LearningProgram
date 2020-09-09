const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(express.urlencoded({extended: false}));

mongoose.connect("mongodb://localhost:27017/bussinessDB", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

const employeeRouter = require("./router/employeeRouter");
const customerRouter = require("./router/customerRouter");
// const projectRouter = require("./router/projectRouter");

////////////////////----- Routers -----////////////////////

app.use("/employee", employeeRouter);
app.use("/customer", customerRouter);
// app.use("/project", projectRouter);
app.post("/", function (req, res) {
  const text = req.body
  res.send(text);
})

////////////////////----- Server has started message -----////////////////////

app.listen(3000, function () {
  console.log("Server has statrted on port 3000");
});
