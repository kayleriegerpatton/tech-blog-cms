const auth = (req, res, next) => {
  // if logged in, proceed
  if (req.session.loggedIn) {
    console.log("In session");

    next();
    //   if not logged in, redirect to login page
  } else {
    res.redirect("/login");
  }
};

module.exports = auth;
