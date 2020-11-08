const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();

app.on("request",(req,res)=>{
    res.writeHead(httpStatus.OK, {
        "Content-Type" : "text/html"
    });
    let resMsg = "<h2>You can see me!</h2>"
    res.end(resMsg);
});

app.listen(port);
console.log(`Server running on port ${port}`);