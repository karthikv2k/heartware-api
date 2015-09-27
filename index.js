var express = require('express');
var app = express();

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

status = ['green', 'yellow', 'red']

app.get('/status', function(req, res) {
  res.json({'status':status[randomInt(0,3)],'id': Math.random().toString()});
});

app.get('/feedback/:id/:correct_label', function(req, res) {
	console.log(req.param("id") + " " + req.param("correct_label") )
  res.json({'status': 'ok'});
});

// Dependencies.
var http = require('http');
var server = http.Server(app);

// Initialize socket server.
var port = process.env.PORT || 3000;
// Initialize http server.
server.listen(port);
console.log('listening on port ' + port);