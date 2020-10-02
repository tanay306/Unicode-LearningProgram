const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

/////--engine setup--/////

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'tanay',
    resave: false,
    saveUninitialized: false,
  })
);

/////--initializing and passport session--/////

app.use(passport.initialize());
app.use(passport.session());

/////--connecting with mongoDB--/////

mongoose.connect('mongodb://localhost:27017/bussinessDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

/////--passport serialize and deserialize user--/////

require('./config/passport')(passport);

/////--requiring all routes--/////

const indexRouter = require('./router/indexRouter');
const employeeRouter = require('./router/employeeRouter');
const customerRouter = require('./router/customerRouter');
const projectRouter = require('./router/projectRouter');
const signInRouter = require('./router/signInRouter');
const signUpRouter = require('./router/signUpRouter');
const signOutRouter = require('./router/signOutRouter');

/////--using all routes--/////

app.use('/', indexRouter);
app.use('/employee', employeeRouter);
app.use('/customer', customerRouter);
app.use('/project', projectRouter);
app.use('/signIn', signInRouter);
app.use('/signOut', signOutRouter);
app.use('/signUp', signUpRouter);

/////--Server has started message--/////

app.listen(3000, () => {
  console.log('Server has statrted on port 3000');
});
