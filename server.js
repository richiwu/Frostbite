var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db  = mongojs('testimonials', ['testimonials']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
//server to parse body of input
app.use(bodyParser.json());

app.get('/testimonials', function(req, res) {
	console.log("received GET")

	db.testimonials.find(function (err,  docs) {
		console.log(docs);
		res.json(docs);
	});
});

//inputs  into  database and sends to  controller
app.post('/testimonials', function(req, res){
	console.log(req.body);
	db.testimonials.insert(req.body, function(err,doc){
		res.json(doc);
	});
});


app.listen(3000);
console.log("running through the 6 on server 3000");

