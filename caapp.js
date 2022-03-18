const http = require('http');

const server = http.createServer((req, res) => {

    //setting status and headers
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    //sending response
    res.end('Hello World');
});

server.listen(8080);