/*eslint no-console: 0*/
"use strict";

var port = process.env.PORT || 3000;
var express = require("express");
var passport = require("passport");
var xssec = require("@sap/xssec");
var xsenv = require("@sap/xsenv");

var app = express();
passport.use("JWT", new xssec.JWTStrategy(xsenv.getServices({
	uaa: {
		tag: "xsuaa"
	}
}).uaa));

app.use(passport.initialize());

app.use(
	passport.authenticate("JWT", {
		session: false
	})
);

app.get("/testapi", function (req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Hello World\n");
});

app.listen(port, function () {
	console.log("myapp listening on port " + port);
});
