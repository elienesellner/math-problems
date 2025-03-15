var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;

  if (pathname === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found\n');
  }
});

server.listen(8080);
console.log('Server running at http://localhost:8080/');
