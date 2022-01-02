const renderHomepage = async (req, res) => {
  res.render("homepage");
};

const renderSignup = (req, res) => {
  res.render("signup");
};

const renderLogin = (req, res) => {
  res.render("login");
};

const renderBlog = async (req, res) => {
  res.render("blog");
};

module.exports = { renderHomepage, renderSignup, renderLogin, renderBlog };
