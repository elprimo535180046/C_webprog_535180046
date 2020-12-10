const LocalStrategy = require("passport-local").Strategy;

const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

//user model
const User = require("../models/User");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      //user cocok
      User.findOne({ email: email })
        .then((user) => {
          if (!user) {
                console.log("e402");
                return done(null, false, { message: "Password/Email salah." });
          }

          //cek password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
                return done(null, user);
            } else {
                console.log("e403");
                return done(null, false, { message: "Password/Email salah." });
            }
          });
        })
        .catch((err) => console.log(err));
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};