var express = require('express');

var app = express.createServer(express.logger());
var response_buffer= fs.readFileSync("index.html");
var response_string = response_buffer.app();

toString1.get('/', function(request, response) {
  //response.send(response_string);
  response.send("huh?");  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
