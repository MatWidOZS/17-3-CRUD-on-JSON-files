var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
	console.log('Received request GET for /getNode');
	fs.readFile('./test.json', 'utf8', function(err, data) {
		if (err) throw err;
		stringifyFile = data
		res.send(data);
	});
});

app.post('/updateNote/:note', function(req, res) {
	console.log('Received request POST for /updateNote/');
	stringifyFile = req.params.note;
	fs.writeFile('./test.json', stringifyFile, function(err) {
		if (err) throw err;
		console.log('File updated');
	});
});

app.listen(3000);