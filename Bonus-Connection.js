var MongoClient = require('mongodb').MongoClient
,format = require('util').format;

MongoClient.connect('mongodb://student:classcen3031@ds035503.mlab.com:35503/lecture', function(err,db){
    if(err) throw err;

    // db.listCollections(function(err, collections){
    //     console.log(collections);
    // });

    db.collection('coll').insertOne({
        "Name" : "Nathan Lively",
        "Email": "ntlively@ufl.edu"
     });

    db.collection('coll').find().toArray(function(err,doc){
        console.log(JSON.stringify(doc));
        db.close();
    });

    console.dir("Finished");
});