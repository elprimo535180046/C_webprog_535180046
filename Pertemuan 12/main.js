const port = process.env.PORT || 3000;
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const app = express();

//passport config
require("./config/passport")(passport);

//db config
const db = require("./config/keys").MongoURI;

//connect mongodb
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✓ MongoDB"))
  .catch((err) => console.log(err));

// Engine EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//bodyparser
app.use(express.urlencoded({ extended: false }));

//Use session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

//Use passport
app.use(passport.initialize());
app.use(passport.session());

//Use flash
app.use(flash());

//Set global var
app.use((req, res, next) => {
  res.locals.msg_OK = req.flash("msg_OK");
  res.locals.msg_nosession = req.flash("msg_nosession");
  res.locals.error = req.flash("error");
  next();
});

//Routing
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

app.listen(port, console.log(`Connected on localhost:${port}`));