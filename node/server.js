var http = require('http');
var fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) {
        responseCode = 200;
    }

    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('500: Internal server error');
            return;
        }

        res.writeHead(responseCode, {'Content-Type': contentType});
        res.end(data);
    });
}

http.createServer(function(req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    console.log(req.url + ' ' + path);

    switch (path) {
        case '': 
            serveStaticFile(res, '/public/home.html', 'text/html', 200);
            break;
        case '/about': 
            serveStaticFile(res, '/public/about.html', 'text/html', 200);
            break;
        case '/img/queenii.jpg': 
            serveStaticFile(res, '/public/img/queenII.jpg', 'image/jpg', 200);
            break;
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
}).listen(3000);

console.log('server started in port 3000.');
