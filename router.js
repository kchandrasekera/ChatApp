var fs = require('fs');
var http = require('http');
var path = require('path');
var mime = require('mime');

var responder = function(req, res) {
  if (req.url == "/") {
    fs.readFile('public/index.html', function(err, data) {
      if (err) {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("Error 404: resource not found");
      }
      else {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
      }
      res.end();
    });
  }
  else {
    fs.readFile("public" + req.url, function(err, data) {
      if (err) {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("Error 404: resource not found");
      }
      else {
        res.writeHead(200, {"Content-Type": "text/javascript"});
        res.write(data);
      }
      res.end();
    });
  }
};


exports.responder = responder;