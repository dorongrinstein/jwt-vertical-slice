// simple STS  
// for demonstration purposes only

// authenticates the user, using username/password
// write cookie named concur-user containing a JWT
// redirect the user to URI specified in redirect=

var express = require('express');
var app = express();
var ui = require('./ui');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var jwtLib = new (require('dorongrinstein-jwt-generator'))('../../privateKey/private_key.pem');
var cookieName = process.env.JWT_COOKIE_NAME || 'concur-user';

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', ui.login);
app.get('/logout', function(req, res) {
  res.clearCookie(cookieName);
  res.clearCookie('redirect');
  res.clearCookie('username');
  res.send('logged out');
});
app.post('/login', authenticate);
var port = process.env.STS_PORT || 3002;
app.listen(port);
console.log('STS listening on port ' + port);


function authenticate(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var redirect = req.cookies.redirect;
  // authentication goes here ----->
  if ((username == 'doron') && (password == '123')) {
    res.clearCookie('redirect');
    res.cookie(cookieName, makeJwt(username));
    res.redirect(redirect);
   }
   else
     res.redirect('/?redirect=' + redirect);
}

function makeJwt(username) {
  jwtLib.addClaim('iss', 'concur');
  jwtLib.addClaim('user', username);
  return jwtLib.make();
}
