var fs = require("fs");

console.log("Rewriting existing file . . .")
fs.writeFile('input.txt','This is a new line! Where is lorem?',function(err,data){
    if (err) {
        console.log(err.stack);
        return;
    }
    console.log("Write success!");
    console.log("Reopening file . . .");

    fs.readFile('input.txt',function(err,data){
        if (err) {
            console.log(err.stack);
        }
        console.log("Async read: " + data.toString());
    });
});

console.log("Program terminated.");