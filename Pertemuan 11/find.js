var MongoClient = require('mongodb').MongoClient,
    dbURL = "mongodb://127.0.0.1:27017",
    dbName = "db-untar-cafe"

MongoClient.connect(dbURL, function(err,client){
    if (err){
        throw err;
    }
    //Function to find
    let db = client.db(dbName);
    db.collection("untar-cafe")
    .find()
    .toArray((err,data)=> {
        if (err) throw err;
        console.log(data);
    })
});