var MongoClient = require('mongodb').MongoClient,
    dbURL = "mongodb://127.0.0.1:27017",
    dbName = "db-untar-cafe"

MongoClient.connect(dbURL, function(err,client){
    if (err){
        throw err;
    }
    //Function to push ONE DATA
    let db = client.db(dbName);
    db.collection("untar-cafe")
    .insertOne({
        menu: "Teh Sisri",
        description: "Teh Sisri segar, cocok untuk siang harimu yang kelam.",
        price: 5000,
        isavailable: true
    },(err,db)=>{
        if (err) throw err;
        console.log(db);
    })
});