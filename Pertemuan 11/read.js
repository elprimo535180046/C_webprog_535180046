const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    { useNewUrlParser: true}
);
const db = mongoose.connection;

db.once("open",()=> {
    console.log("Connection established using Mongoose.");
});

const Member = require('./models/schema');

var f1Query = Member.findOne({name: "Darkness"})
f1Query.exec((err,data)=>{
    if (data) console.log("Find One: " + JSON.stringify(data));
});

Member.find({name: "Darkness"}).exec((err,data)=>{
    if (data) console.log("Find: " + JSON.stringify(data));
});

Member.where('credit').gt(0).exec((err,data)=>{
    if (data) console.log("Where: " + JSON.stringify(data));
});