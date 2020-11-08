const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();

const getJSONString = obj => {
    return JSON.stringify(obj,null,2);
};

app.on("request",(req,res)=> {
    var body = [];

    req.on("data",(bodyData)=>{
        body.push(bodyData);
    });

    req.on("end",()=>{
        body = Buffer.concat(body).toString();
        console.log(`Request body content: ${body}`);
    });

    console.log(`Method: ${getJSONString(req.method)}`);
    console.log(`URL: ${getJSONString(req.url)}`);
    console.log(`Headers: ${getJSONString(req.headers)}`);
    res.writeHead(httpStatus.OK, {
        "Content-Type" : "text/html"
    });

    let resMsg = "<h2>Am i seen? :o</h2>"
    res.end(resMsg);
});

app.listen(port);

console.log(`Server running on port ${port}`);