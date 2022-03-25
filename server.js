//Initialize web server with http and fs modules
var http = require('http');
var fs = require('fs');
//Other web server components
var url = require('url');
var path = require('path');

//Show the user voting.html on port 80, regardless of what page they request
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "./public/" + "voting.html";
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