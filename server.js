var express = require('express');
var app = express();
var staticDir = (process.env.NODE_ENV || "developement") === "production"?"dist":"public";

app.use(express.static(__dirname + "/" + staticDir ));

app.get("*",function (req,res){
	res.sendFile(__dirname + "/" + staticDir + "/index.html");

});

var server = app.listen(process.env.port || 8018,function() {
	console.log("listening on port %d", server.address().port);
});