var url = require('full-url');
var verifier = new(require('dorongrinstein-jwt-verifier'))();
var stsUrl = process.env_STS_URL || 'http://localhost:3002';

var cookieName = process.env.JWT_COOKIE_NAME || "concur-user";
module.exports = function auth(req, res, next) {
  var redirect = url(req);
  if (req.cookies[cookieName] != undefined) {
   verifier.verify(req.cookies[cookieName], function(jwt) {
    res.cookie('username', jwt.user);
    next();
   });    
  }
  else
    res.redirect(stsUrl+'?redirect='+redirect);
}
