const http = require('http');
const https = require('https')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end("Hello World");
});

const options = {
    hostname: 'cataas.com',
    port: 443,
    path:'/cat/gif',
    method: 'GET',
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

