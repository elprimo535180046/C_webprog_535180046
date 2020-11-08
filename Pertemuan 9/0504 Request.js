var express = require("express");
const port = 3000;
var app = express();

app.get('/',function(req,res){
    res.send('I am alive!');
});
app.post('/',function(req,res){
    res.send('Ini POST Request!');
});
app.put('/user',function(req,res){
    res.send('Ini PUT Request!');
});
//Yang delete error waktu di POSTMAN.
app.delete('/user',function(req,res){
    res.send('DELETE dilakukan pada suatu user.');
});

app.use(express.static('public'));

app.listen(port);

console.log(`Server running on port ${port}`);