const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((request,response) => {
        console.log("Request accepted.");
        response.writeHead(httpStatus.OK,{"Content-Type":"text/html"});
        let resMsg = "<h1>Welcome to WebServer using NodeJS!</h1>";

        response.write(resMsg);
        response.end();

        console.log(`Sent a response : ${resMsg}`);
    });

app.listen(port);
console.log(`Server started on port ${port}`);