var fs = require("fs");

console.log("Deleting file . . .");
fs.unlink('input.txt', function(err){
    if (err){
        console.error(err);
    }
    console.log("Deleted!");
});