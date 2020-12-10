const express = require("express"),
bcrypt = require("bcryptjs"),
passport = require("passport");

const router = express.Router();

//user model
const User = require("../models/User");

router.get("/login", (req, res) => res.render("login"));
router.get("/register", (req, res) => res.render("register"));

//Register
router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  //cek required
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "harap data di input semua" });
  }

  //password
  if (password !== password2) {
    errors.push({ msg: "password tidak sama" });
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2,
    });
  } else {
    //Validasi
    User.find({ email: email }).limit(1).then((user) => {
      if (user) {
        //usernya ada
        errors.push({ msg: "Email sudah terdaftar!" });
        res.render("register", {
          errors,
          name,
          email,
          password,
          password2,
        });
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });
        //hash password
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            //Hash Password
            newUser.password = hash;

            //Save User
            newUser
              .save()
              .then((user) => {
                req.flash(
                  "msg_OK",
                  "Anda berhasil registrasi, Silahkan Login"
                );

                res.redirect("/users/login");
              })
              .catch((err) => console.log(err));
          })
        );
      }
    });
  }
});

//login handle
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/users/login",
    failureFlash: true,
  })(req, res, next);
});

//logout handle
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("msg_OK", "Anda berhasil Log out");
  res.redirect("/users/login");
});
module.exports = router;