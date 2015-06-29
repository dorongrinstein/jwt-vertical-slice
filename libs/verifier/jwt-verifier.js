// jwt verifier
// copyright (c) 2015 Concur Technologies
// All rights reserved
// Doron Grinstein (doron.grinstein@concur.com)

// this library is not for production use.
// it is for the purpose of demonstrating a capability only, in the context
// of an architecture document.

//todo: handle key rotation. current implementation assumes a fixed
//      public key. need to decode the JWT, look at kid and determine 
//      the public key url path to call to obtain the specified key.

var request = require('request');
var jwt = require('jsonwebtoken');
var pubKeyHost = process.env.PUBLIC_KEY_HOST || "http://localhost";
var pubKeyPort = process.env.PUBLIC_KEY_PORT || 3001;
var jwtValidTime = process.env.JWT_VALID_TIME || (24 * 60 * 60) // 24 hours
var jwtValidIssuer = process.env.JWT_VALID_ISSUER || 'concur';

var pubKeyUrl = pubKeyHost + ":" + pubKeyPort;
function jwt_verifier_lib() {
    this.publicKey = null;
	this.verify = verifyJwt;
}

function verifyJwt(token, callback) {
  lib = this;
  if (this.publicKey == null) {
  	request(pubKeyUrl, function(error, response, body) {
  		if (!error && response.statusCode == 200) {
  			lib.publicKey = body;
  			var result = null;
  			try {
  				result = checkClaims(jwt.verify(token, lib.publicKey));
  			} catch (e) {
  				result = 'error';
  			}
  			callback(result);
  		} else {
  			console.log('error contacting public key server');
        callback('error');
  		}
  	});
  } else {
  		var result = null;
  			try {
  				result = checkClaims(jwt.verify(token, lib.publicKey));
  			} catch (e) {
  				result = 'error';
  			}
  			callback(result);
  }
}

function checkClaims(json) {
	if ((json.iss == jwtValidIssuer) && (validTime(json.iat))) {
		return json;
	}
	else
		return null;
}

function validTime(timeInt) {
  currentTime = Math.floor((new Date).getTime()/1000); //get rid of milliseconds
  var timeDiff = currentTime - timeInt;
  if (timeDiff <= jwtValidTime)
  	return true;
  else
  	return false;
}

module.exports = jwt_verifier_lib;

