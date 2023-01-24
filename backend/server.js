require('dotenv').config()
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const indexroutes = require('./routes/index');
const app = express();

// -------
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
// -------
app.use(
    session({
      secret: process.env.SECRETKEY,
      resave: true,
      saveUninitialized: true,
    })
);
app.use(cookieParser(process.env.SECRETKEY));
app.use(passport.initialize());
app.use(passport.session());
require("./passport-config")(passport);

// ---- start server
app.listen(4000, ()=>{
    console.log("Server Has Started");
})

