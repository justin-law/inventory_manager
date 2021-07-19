const express = require("express");
var ObjectId = require('mongodb').ObjectID;


// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

// This section will help you get a list of all the inflow records.
recordRoutes.route("/inflow/record").get(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  db_connect
    .collection("inflow")
    .find({}).sort({"item_date":-1}) 
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a list of all the outflow records.
recordRoutes.route("/outflow/record").get(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  db_connect
    .collection("outflow")
    .find({}).sort({"item_date":-1}) 
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will get the sum of inflow item amounts.
recordRoutes.route("/inflow/sum").get(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  db_connect
    .collection("inflow")
    .aggregate([{"$group":{"_id":"$item_name","total":{"$sum": "$item_amount"}}},{"$sort":{"total":-1}}])
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will get the sum of outflow item amounts.
recordRoutes.route("/outflow/sum").get(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  db_connect
    .collection("outflow")
    .aggregate([{"$group":{"_id":"$item_name","total":{"$sum": "$item_amount"}}},{"$sort":{"total":-1}}])
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new inflow record.
recordRoutes.route("/inflow/record/add").post(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  req.body.item_amount = parseInt(req.body.item_amount);
  let myobj = {
    item_name: req.body.item_name,
    item_date: req.body.item_date,
    item_amount: req.body.item_amount,
    item_notes: req.body.item_notes,
  };
  db_connect.collection("inflow").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

// This section will help you create a new outflow record.
recordRoutes.route("/outflow/record/add").post(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  req.body.item_amount = parseInt(req.body.item_amount);
  let myobj = {
    item_name: req.body.item_name,
    item_date: req.body.item_date,
    item_amount: req.body.item_amount,
    item_notes: req.body.item_notes,
  };
  db_connect.collection("outflow").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

// This section will help you update an inflow record by id.
recordRoutes.route("/inflow/update/:id").post(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  let myquery = { _id: ObjectId(req.params.id) };
  req.body.item_amount = parseInt(req.body.item_amount);
  let newvalues = {
    $set: {
        item_name: req.body.item_name,
        item_date: req.body.item_date,
        item_amount: req.body.item_amount,
        item_notes: req.body.item_notes,
    },
  };
  db_connect
    .collection("inflow")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
});

// This section will help you update an outflow record by id.
recordRoutes.route("/outflow/update/:id").post(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  let myquery = { _id: ObjectId(req.params.id) };
  req.body.item_amount = parseInt(req.body.item_amount);
  let newvalues = {
    $set: {
        item_name: req.body.item_name,
        item_date: req.body.item_date,
        item_amount: req.body.item_amount,
        item_notes: req.body.item_notes,
    },
  };
  db_connect
    .collection("outflow")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
});

// This section will help you get the record to update for inflow.
recordRoutes.route("/inflow/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  db_connect
    .collection("inflow")
    .findOne({_id: ObjectId(req.params.id)}, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get the record to update for outflow.
recordRoutes.route("/outflow/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  db_connect
    .collection("outflow")
    .findOne({_id: ObjectId(req.params.id)}, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you delete an inflow record
recordRoutes.route("/inflow/:id").delete((req, res) => {
  let db_connect = dbo.getDb("inventoryItems");
  var myquery = {_id: ObjectId(req.params.id) };
  db_connect.collection("inflow").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
});

// This section will help you delete an outflow record
recordRoutes.route("/outflow/:id").delete((req, res) => {
  let db_connect = dbo.getDb("inventoryItems");
  var myquery = {_id: ObjectId(req.params.id) };
  db_connect.collection("outflow").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
});

// This section will allow for searching of specific items.
recordRoutes.route("/inflow/search/:id").get(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  db_connect
  .collection("inflow")
  .find({"item_name":req.params.id})
  .toArray(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

recordRoutes.route("/outflow/search/:id").get(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  db_connect
  .collection("outflow")
  .find({"item_name":req.params.id})
  .toArray(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});


module.exports = recordRoutes;