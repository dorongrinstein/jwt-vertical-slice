var cookieName = process.env.AUTH_COOKIE_NAME || "concur-user";

exports.login = function(req, res) {
  var redirect = req.query.redirect;
  res.cookie('redirect', redirect); 
  res.sendFile(__dirname + '/static/login.html');

}

