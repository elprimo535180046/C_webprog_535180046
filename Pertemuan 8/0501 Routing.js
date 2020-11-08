const routeResMap = {
    "/info":"<h1>Info Page</h1>",
    "/about":"<h1>About us</h1>",
    "/other":"<h1>Other pages</h1>",
    "/error":"<h1>404 Page not found</h1>"
};

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((req,res) => {
        res.writeHead(200, {
            "Content-Type":"text/html"
        });
        if (routeResMap[req.url]) {
            res.end(routeResMap[req.url]);
        }
        else {
            res.end("<h1>Welcome to main page</h1>");
        }
    });

    app.listen(port);

console.log(`Server is running on port ${port}`);