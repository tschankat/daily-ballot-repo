//Initialize web server with http and fs modules
var http = require('http');
var fs = require('fs');
//Other web server components
var url = require('url');
var path = require('path');

//Show the user the file they want on port 80
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
    }).listen(80);



