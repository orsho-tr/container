var http = require('http')
var express = require('express');

const app = express();

var port = 4000

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Theo Hernandez\n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)
