const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    fs = require("fs");

const getURL = (url) => {
    return `views${url}.html`
};

http.createServer((req,res)=>{
    let viewURL = getURL(req.url);

    fs.readFile(viewURL,(err,data)=>{
        if (err) {
            res.writeHead(httpStatus.NOT_FOUND);
            res.write("<h1>404 Page not found</h1>");
        }
        else {
            res.writeHead(httpStatus.OK,{
                "Content-Type":"text/html"
            });
            res.write(data)
        }
        res.end();
    });
}).listen(port);

console.log(`Server is running on port ${port}`);