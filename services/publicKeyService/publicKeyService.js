var express = require('express');
var app = express();
var fs = require('fs');
var proj_root = process.env.PROJECT_ROOT || '/Users/dorong/vertical';
var publicKeyFile = proj_root + '/publicKeys/publickey.pem';
var pk = fs.readFileSync(publicKeyFile, 'utf8');
var port = process.env.PUBLIC_KEY_PORT;
var chosenPort = port || 3001;
app.get('/', showPublicKey);
app.listen(chosenPort);
console.log('Public Key Server is Listening on Port ' + chosenPort);
function showPublicKey(req, res) {
  res.send(pk);
}
