const http = require('http');
const part = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.statusCode= 200;
    res.setHeader("content-type", "text/html");
    res.end(
        "<h1> This is our http video </h1> <p> Hey this  course is usefull!</p>"
        );
});
//console.log(port);
server.listen(port, () => {
    console.log('server is listening on port ${port} ');
});