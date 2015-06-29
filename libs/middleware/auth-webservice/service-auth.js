/**
 * Created by doron.grinstein@concur.com on 6/28/15.
 * Copyright (c) 2015 Concur. All Rights Reserved.
 */
var verifier = new(require('dorongrinstein-jwt-verifier'))();

module.exports = function auth(req, res, next) {
    var h = req.headers["authorization"];
    if (h != null) {
        if (h.indexOf("Bearer", 0) === 0) {
            var parts = h.split(" ");
            if (parts.length === 2) {
                verifier.verify(parts[1], function (jwt) {
                    if ((jwt != null) && (jwt != 'error')) {
                        console.log(jwt);
                        req.jwt = jwt;
                        next();
                    }
                });
            }
        }
    }
    res.status(401).send("Unauthorized");
}