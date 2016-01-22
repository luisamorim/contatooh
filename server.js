var express = require('express');
var app = express();
var server = require('http').createServer(app);

var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.get('/',function(req,res){
	res.send("openshift nodejs");
});

app.listen(port,host);