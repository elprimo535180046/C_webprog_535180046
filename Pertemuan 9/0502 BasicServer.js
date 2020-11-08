var express = require("express");
const port = 3000;
var app = express();

app.get('/',function(req,res){
    res.send('I am alive (maybe)!');
});

app.listen(port);

console.log(`Server running on port ${port}`);