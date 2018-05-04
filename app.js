const http = require('http');

const server = http.createServer((request, response) => {
    if(request.url === "/api/message") {
        response.write(JSON.stringify([{message: "Hello"}]));
        response.end();
    }
    if(request.url === '/') {
        response.end();
    }
});
server.listen(3000);

console.log("listening on port 3000");
