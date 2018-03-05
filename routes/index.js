const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const bodyParser = require("body-parser");


//const uri = "mongodb://A1031810:FHXeRX5cxlxiDOSD@appbares-shard-00-00-wzvxn.mongodb.net:27017,appbares-shard-00-01-wzvxn.mongodb.net:27017,appbares-shard-00-02-wzvxn.mongodb.net:27017/bares?ssl=true&replicaSet=appBares-shard-0&authSource=admin";

const uri = "mongodb+srv://A1031810:FHXeRX5cxlxiDOSD@appbares-wzvxn.mongodb.net/bares";

const addToCollection = function(db, usuario, collectionName, callback) {
  // Get the documents collection
  const collection = db.collection(collectionName);
  // Insert some documents
  collection.insertOne(usuario, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    assert.equal(1, result.ops.length);
    console.log("Inserted 1 element into the collection:" + collectionName);
    callback();
  });
}

const getFromCollection = function(db, collectionName, query, callback) {
  // Get the documents collection
  const collection = db.collection(collectionName);
  // Find some documents
  collection.find(query).limit(20).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

router.get("/eventos/:empresa", function(req, res) {
	MongoClient.connect(uri, function(err, client) {
		assert.equal(err, null);
		const baresDB = client.db("bares");
   	    // perform actions on the collection object   	    
		getFromCollection(baresDB, "eventos", {empresa: req.params.empresa}, (eventos) => {
			res.send(eventos);
		});
    	client.close();
    });
});

router.get("/empresas", function(req, res) {
	MongoClient.connect(uri, function(err, client) {
		assert.equal(err, null);
		const baresDB = client.db("bares");
   	    // perform actions on the collection object   	    
		getFromCollection(baresDB, "empresas", {}, (empresas) => {
			res.send(empresas);
		});
    	client.close();
    });
});

router.post("/usuarios", function(req, res) {
	MongoClient.connect(uri, function(err, client) {
		assert.equal(err, null);
		const baresDB = client.db("bares");
   	    // perform actions on the collection object   	    
		addToCollection(baresDB, req.body, "usuarios", () => {
			res.sendStatus(200);
		});	
    	client.close();
    });
});

router.post("/empresas", function(req, res) {
	MongoClient.connect(uri, function(err, client) {
		assert.equal(err, null);
		const baresDB = client.db("bares");
   	    // perform actions on the collection object   	    
		addToCollection(baresDB, req.body, "empresas", () => {
			res.sendStatus(200);
		});
    	client.close();
    });	
});

router.post("/eventos", function(req, res) {
	MongoClient.connect(uri, function(err, client) {
		assert.equal(err, null);
		const baresDB = client.db("bares");
   	    // perform actions on the collection object   	    
		addToCollection(baresDB, req.body, "eventos", () => {
			res.sendStatus(200);
		});
    	client.close();
    });	
});

module.exports = router;
