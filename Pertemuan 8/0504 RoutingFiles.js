const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    router = require("./Router"),
    fs = require("fs"),
    plainTextContentType = {
        "Content-Type" : "text/plain"
    },
    htmlContentType = {
        "Content-Type" : "text/html"
    },
    customRF = (file,res) => {
        fs.readFile(`./${file}`,(err,data)=> {
            if (err) {
                console.log("Error reading files . . .");
            }
            res.end(data);
        });
    };

router.get("/", (req,res) => {
    res.writeHead(httpStatus.OK,plainTextContentType);
    res.write("INDEX");
});

router.get("/index.html", (req,res)=> {
    res.writeHead(httpStatus.OK,htmlContentType);
    customRF("views/index.html",res);
});

router.post("/",(req,res)=> {
    res.writeHead(httpStatus.OK,plainTextContentType);
    res.end("POSTED");
});

http.createServer(router.handle).listen(port);

console.log(`Server is running on port ${port}`);