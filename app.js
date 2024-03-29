var express = require("express");
//var mongo = require('mongodb');
var app = express();
var bodyParser = require('body-parser');

//var mongo = require('mongodb');
//const MongoClient = require("mongodb/lib/mongo_client");
/*
var Server = mongo.Server,Db = mongo.Db, BSON = mongo.BSONPure;

var server = new Server('localhost', 28889, {auto_reconnect: true});
db = new Db('vialeea', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'vialeea' database");
    } else {
        console.log("Connection to database failed.");
    }
});
*/
/*
var uri = "mongodb://vialeea-db:QcGXxHOMnaLJ2ej2CLPrvklVD32xlUgvmYIZ0JMLFThHB1g0EkESip3kmgVMBWvzCokMGyxkf0QJACDbdSBawQ==@vialeea-db.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@vialeea-db@";
//var mongoClient = require("mongodb").MongoClient;
MongoClient.connect(uri, function (err, db) {
  db.close();
});
*/

//var mongoClient = require("mongodb").MongoClient;
/*
mongoClient.connect("mongodb://vialeea-db:QcGXxHOMnaLJ2ej2CLPrvklVD32xlUgvmYIZ0JMLFThHB1g0EkESip3kmgVMBWvzCokMGyxkf0QJACDbdSBawQ==@vialeea-db.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@vialeea-db@", function (err, db) {
    //db.use("vialeea-test");
    //db.co
    db.close();

});
*/ 
/*
async function run() {
    try {
      // Connect the client to the server (optional starting in v4.7)
      await mongoClient.connect("mongodb://vialeea-db:QcGXxHOMnaLJ2ej2CLPrvklVD32xlUgvmYIZ0JMLFThHB1g0EkESip3kmgVMBWvzCokMGyxkf0QJACDbdSBawQ==@vialeea-db.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@vialeea-db@");

      // Send a ping to confirm a successful connection
      await mongoClient.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await mongoClient.close();
    }
  }
run().catch(console.dir);
*/

var uri = "mongodb://vialeea-db:QcGXxHOMnaLJ2ej2CLPrvklVD32xlUgvmYIZ0JMLFThHB1g0EkESip3kmgVMBWvzCokMGyxkf0QJACDbdSBawQ==@vialeea-db.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@vialeea-db@";


const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// Replace the placeholder with your Atlas connection string
//const uri = "<connection string>";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
/*
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);
*/

var db;

const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    db = client.db("vialeea-test");
    var collection = db.collection("pfusers");
    var users = await collection.find().toArray();

    for(var i = 0; i < users.length; i++) {
        var user = users[i];
        console.log("ID: " + user._id + " name: " + user.name);
        //users.foreach(user => console.log("ID: " + user.id + " name: " + user.name));
    }
    //console.log("Users: " + users);
    /*
    db.collection('pfusers', function(err, collection) {
        collection.find({}, {name:1, _id:1}).toArray(function (err, items) {
            console.log(items);
        });
    });  
    */
   //collection.


  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);



app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.get('/testdata', function(req, res) {
    res.send({jotain: 'arvo'});
});

app.get('/rest/char2/:id', async function(req, res) {
    var id = req.params.id;

    var collection = db.collection("characters");
    //var users = await collection.find({name: id}).toArray();

    var char = await collection.findOne({_id: new ObjectId(id)});


    res.send(char);

    //res.send(db.collection('pfusers').find().toArray());

    /*
    db.collection('characters', function(err, collection) {
        collection.findOne({'_id':new mongo.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });   
    */
});

var store = async function(req, res) {
    console.log("Trying to save a new item");
    var character = req.body;
    console.log(character);

    var collection = db.collection('characters');
    await collection.insertOne(character);
    res.send("OK");
    /*
    db.collection('characters', function(err, collection) {
        if (err) {
            console.log("Error trying to open collection");
            console.log(err);
        }
        else {
            collection.insert(character, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } 
                else {
                    console.log('Success: ' + JSON.stringify(result));
                    res.send(result.ops[0]);
                }
            });
        }
    });    
    */
};

var update = async function(req, res) {
    var id = req.params.id;
    console.log("Trying to update an item with id " + id);
    var character = req.body;
    console.log(character);
    id = new ObjectId(id);
    character._id = id;

    var collection = db.collection('characters');
    //We could be more efficient by using updateOne and setting only changed fields.
    //Needs a ton of logic to frontend, though.
    var result = await collection.replaceOne({_id:id}, character);

    //console.log("Saved character:");
    console.log(result);

    getOneChar(req, res);
    //res.send(savedcharacter);

/*
    db.collection('characters', function(err, collection) {
        collection.update({'_id':id}, character, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating character: ' + err);
                res.send({'error':'An error has occurred'});
            }
            else {
                console.log('' + result + ' document(s) updated');
                res.send(character);
            }
        });
    });
    */
};

var charlist = async function(req, res) {
    //var id = req.params.id;

    var collection = db.collection("characters");
    //var users = await collection.find({name: id}).toArray();

    var chars = await collection.find().project({name:1, _id:1}).toArray();


    res.send(chars);


    /*
    db.collection('characters', function(err, collection) {
        collection.find({}, {name:1, _id:1}).toArray(function (err, items) {
            res.send(items);
        });
    });
    */
};

var getOneChar = async function(req, res) {
    var id = req.params.id;

    var collection = db.collection("characters");
    //var users = await collection.find({name: id}).toArray();

    var char = await collection.findOne({_id: new ObjectId(id)});


    res.send(char);

    /*
    var id = req.params.id;
    id = new mongo.ObjectID(id);
    db.collection('characters', function(err, collection) {
        collection.findOne({'_id': id}, function (err, item) {
            res.send(item);
        }); 
    });
    */
};

app.get('/rest/char/:id', getOneChar);
app.get('/rest/allchars', charlist);

//app.get('/rest/char', getOneChar);

app.post('/rest/char', store);
app.post('/rest/char/:id', update);

app.use(express.static('static'));

module.exports = app;


//app.listen(8080);
