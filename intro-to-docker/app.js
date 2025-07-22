const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World from Docker!');
});

server.listen(4200, () => {
    console.log('Server running at http://localhost:4200/');
});