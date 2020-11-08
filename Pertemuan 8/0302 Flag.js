var fs = require("fs");

//Async - Open file
console.log("Opening file . . .");
fs.open('input.txt', function(err, fd){
    if (err){
        return console.error(err);
    }
    console.log("File open success!");
});

console.log("Program terminated.");