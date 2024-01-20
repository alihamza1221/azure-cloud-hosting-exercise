const http = require('http');

const server = http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<html><body><h1>Hello Ali!</h1><p> Azure Web Services </p></body></html>");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log(`Server running at http://localhost:${port}`);