const express = require("express");

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
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  let myobj = {
    item_name: req.body.item_name,
    item_date: req.body.item_date,
    item_amount: req.body.item_amount,
  };
  db_connect.collection("items").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, res) {
  let db_connect = dbo.getDb("inventoryItems");
  let myquery = { id: req.body.id };
  let newvalues = {
    $set: {
        item_name: req.body.item_name,
        item_date: req.body.item_date,
        item_amount: req.body.item_amount,
    },
  };
  db_connect
    .collection("items")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
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

module.exports = recordRoutes;