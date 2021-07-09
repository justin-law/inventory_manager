const express = require("express");
var ObjectId = require('mongodb').ObjectID;


// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  db_connect
    .collection("items")
    .find({}).sort({"item_date":-1}) 
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will get the sum of item amounts.
recordRoutes.route("/sum").get(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  db_connect
    .collection("items")
    .aggregate([{"$group":{"_id":"$item_name","total":{"$sum": "$item_amount"}}},{"$sort":{"total":-1}}])
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  req.body.item_amount = parseInt(req.body.item_amount);
  let myobj = {
    item_name: req.body.item_name,
    item_date: req.body.item_date,
    item_amount: req.body.item_amount,
    item_notes: req.body.item_notes,
  };
  db_connect.collection("items").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, res) {
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
    .collection("items")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
});

// This section will help you get the record to update.
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  db_connect
    .collection("items")
    .findOne({_id: ObjectId(req.params.id)}, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, res) => {
  let db_connect = dbo.getDb("inventoryItems");
  var myquery = { id: req.body.id };
  db_connect.collection("items").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
});

// This section will allow for searching of specific items.
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  db_connect
    .collection("items")
    .findOne({_id: ObjectId(req.params.id)}, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

module.exports = recordRoutes;