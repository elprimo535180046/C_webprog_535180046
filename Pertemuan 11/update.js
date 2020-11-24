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

Member.updateOne({name: "The Others"},{credit: 696969},(err,raw)=>{
    Member.findOne({name: "The Guy"}).exec((err,data)=>{
        if (data) console.log("Find one: " + JSON.stringify(data));
    });
});