var jwt = require('./jwt-generator');
var lib = new jwt('../../privateKey/private_key.pem');
lib.addClaim('iss', 'concur');
lib.addClaim('role', 'manager');
lib.addClaim('foo', 'bar');
lib.addClaim('username', 'dan');
var token = lib.make();
console.log(token);
