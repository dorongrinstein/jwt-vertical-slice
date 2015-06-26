var jwtLib = require('./jwt-verifier.js');
var jwt = new jwtLib();

var myJwt = process.env.JWT;

jwt.verify(myJwt, function(x) {
  console.log(x);
});
   
