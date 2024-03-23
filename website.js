const fs = require("fs");
const http = require("http");

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  console.log(req.url);

  res.setHeader("Content-type", "text/html");

  if (req.url === "/") {
    res.statusCode = 200; //ok
    res.end(
      "<h1> This is our http video </h1> <p> Hey this course is usefull! </p>  "
    );
  } else if (req.url == "/About") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else if (req.url == "/Link") {
    res.statusCode = 200;
    const data = fs.readFileSync("Link.html");
    res.end(data.toString());
  } else {
    // res.calljn();
    res.statusCode = 404;
    res.end("<h1> 404 Not Found </h1>  ");
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port} `);
});