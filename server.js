var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

var responder = require('./router.js').responder;
var createChat = require('./lib/chat_server.js').createChat

var myServer = http.createServer(function(req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain'});
  responder(req, res);

});

myServer.listen(8080);

createChat(myServer);
console.log('Server running at http://127.0.0.1:8080/');

