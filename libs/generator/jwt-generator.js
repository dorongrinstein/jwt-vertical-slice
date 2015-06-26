var jwt = require('jsonwebtoken');
var fs = require('fs');

function jwt_lib(key) {
    if (key === undefined) {
        throw "Key must be secified";
    } else {
        this.key = inferKey(key);
    }
    this.make = makeJwt;
    this.claims = {};
    this.addClaim = addClaim;
}

function inferKey(key) {
    // we're dealing with a file and need to load it
    if (key.length < 255) {
        return fs.readFileSync(key);
    } else {
        return key;
    }
}

function addClaim(name, value) {
    this.claims[name] = value;
}


function makeJwt() {
    return jwt.sign(this.claims, this.key, {algorithm: 'RS256'});
}

module.exports = jwt_lib;
