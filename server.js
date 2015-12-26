var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    console.log(req.url + ' ' + path);

    switch (path) {
        case '': 
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello world!');
            break;
        case '/about': 
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
    }
}).listen(3000);

console.log('server started in port 3000.');
