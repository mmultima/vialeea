var express = require("express");
var mongo = require('mongodb');
var app = express();
var bodyParser = require('body-parser');

var mongo = require('mongodb');

var Server = mongo.Server,Db = mongo.Db, BSON = mongo.BSONPure;

var server = new Server('localhost', 28889, {auto_reconnect: true});
db = new Db('vialeea', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'vialeea' database");
    }
});

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.get('/testdata', function(req, res) {
    res.send({jotain: 'arvo'});
});

app.get('/rest/char/:id', function(req, res) {
    var id = req.params.id;
    db.collection('characters', function(err, collection) {
        collection.findOne({'_id':new mongo.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });    
});

var store = function(req, res) {
    console.log("Trying to save a new item");
    var character = req.body;
    console.log(character);
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
};

var update = function(req, res) {
    var id = req.params.id;
    console.log("Trying to update an item with id " + id);
    var character = req.body;
    console.log(character);
    id = new mongo.ObjectID(id);
    character._id = id;
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
};

var charlist = function(req, res) {

    db.collection('characters', function(err, collection) {
        collection.find({}, {name:1, _id:1}).toArray(function (err, items) {
            res.send(items);
        });
    });
};

var getOneChar = function(req, res) {
    var id = req.params.id;
    id = new mongo.ObjectID(id);
    db.collection('characters', function(err, collection) {
        collection.findOne({'_id': id}, function (err, item) {
            res.send(item);
        }); 
    });
};

app.get('/rest/char/:id', getOneChar);
app.get('/rest/allchars', charlist);

app.get('/rest/char', getOneChar);

app.post('/rest/char', store);
app.post('/rest/char/:id', update);

app.use(express.static('..'));

app.listen(28888);
