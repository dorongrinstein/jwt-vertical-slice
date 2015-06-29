/**
 * Created by doron.grinstein@concur.com on 6/28/15.
 * Copyright (c) 2015, Concur
 * All Rights Reserved
 */
var express = require('express');
var app = express();

var serviceAuth = require('./service-auth');

app.use(serviceAuth);
app.get('/', serveData);

app.listen(3500);
console.log('Service is listening on port 3500');

function serveData(req, res) {
    res.json({"data": "1234", "user": req.jwt.username});
}
