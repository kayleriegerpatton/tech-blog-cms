const auth = (req, res, next) => {
  // if logged in, proceed to private routes
  if (req.session.loggedIn) {
    next();
    //   if not logged in, redirect to login page
  } else {
    res.redirect("/login");
  }
};

module.exports = auth;
