const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    { useNewUrlParser: true}
);
const db = mongoose.connection;

db.once("open",()=> {
    console.log("Connection established using Mongoose.");
});

const Member = require("./schema");

//Type 1
var member1 = new Member({
    name: "This guy",
    email: "sleep@mongo.dbclass"
});

member1.save((err,savedDocument)=>{
    if(err) throw err;
    console.log(savedDocument);
})