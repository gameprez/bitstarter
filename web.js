var express = require('express');

var app = express.createServer(express.logger());

var fs=require("fs") ;
var content = fs.readFileSync("index.html", "utf8") ;

var response_text = content.toString() ;

app.get('/', function(request, response) {
  response.send(response_text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
