const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    { useNewUrlParser: true}
);
const db = mongoose.connection;

db.once("open",()=> {
    console.log("Connection established using Mongoose.");
});
//Type 1
const memberSchema = mongoose.Schema({
    name: String,
    email: String,
    credit: Number
});

const Member = mongoose.model("Member",memberSchema);

module.exports = Member;

/*Kalo habis dijalanin, dia bakal create data baru di collection "members".
Jangan kaget kalau ada variable "__v: 0". Variable ini adalah variable version.
Kita bisa disable auto generate variable ini, tapi bakal ngebuat documentnya jadi
no version. Hal ini berpengaruh banget sama document punya array of subdocument.
*/