const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    fs = require("fs");

const rMap = {
    "/":"views/index.html"
};

http.createServer((req,res)=>{
    res.writeHead(httpStatus.OK, {
        "Content-Type":"text/html"
    });
    if (rMap[req.url]) {
        fs.readFile(rMap[req.url], (error,data)=>{
            res.write(data);
            res.end();
        });
    }
    else {
        res.end("<h1>404 Page not found</h1>");
    }
}).listen(port);

console.log(`Server is running on port ${port}`);