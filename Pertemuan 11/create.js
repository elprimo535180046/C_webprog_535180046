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

var tempMember = new Member({
    name: "The Guy",
    email: "noemail@me.com",
    credit:42069
});

tempMember.save((err,product)=>{
    if (err) throw err;
    console.log(JSON.stringify(product));
})