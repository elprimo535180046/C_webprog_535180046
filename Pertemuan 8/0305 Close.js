var fs = require("fs");
var buf = new Buffer(1024);

console.log("Opening existing file");
fs.open('input.txt','r+',function(err, fd){
    if (err) {
        return console.error(err);
    }
    console.log("File open success!");
    console.log("Reading file . . .");
    fs.read(fd, buf,0,buf.length,0,function(err, bytes){
        if (err) {
            console.log(err);
        }
        console.log(bytes + " bytes read.");
        //Print only readably bytes to avoid junk.
        if (bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }

        //Close file
        fs.close(fd, function(err){
            if (err) {
                console.log(err);
            }
            console.log("File close success!");
        })
    });
});

console.log("Program terminated.");