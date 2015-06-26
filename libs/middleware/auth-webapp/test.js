var express = require('express');
var app = express();
var auth = require('./auth.js');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(auth);

app.get('/', function(req, res) { res.send('hello'); });

app.listen(3000);
console.log('listening on 3000');
