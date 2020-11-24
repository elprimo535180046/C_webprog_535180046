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

var myQuery = Member.findOne({
    name: "This guy"
}).where("email",/that.guy@here.com/);

myQuery.exec((err,data)=> {
    if (data) console.log(data.name);
});