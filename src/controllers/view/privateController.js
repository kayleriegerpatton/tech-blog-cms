const renderDashboard = (req, res) => {
  // pass blog by id data to handlebars
  res.render("dashboard");
};

module.exports = renderDashboard;
