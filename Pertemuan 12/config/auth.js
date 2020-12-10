module.exports = {
    ensureAuthenticated: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
      req.flash("msg_nosession", "Silahkan login terlebih dahulu");
      res.redirect("/users/login");
    },
  };