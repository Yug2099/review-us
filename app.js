var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/review");
var db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("connection succeeded");
});
var app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/res", function (req, res) {
  var rname = req.body.rname;
  var Ratings = req.body.Ratings;
  var Review = req.body.Review;
  var data = {
    id: "Resort",
    rname: rname,
    Ratings: Ratings,
    Review: Review,
  };
  db.collection("rtable").insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
  });
  return res.redirect("success.html");
});

app.post("/rest", function (req, res) {
  var rname = req.body.rname;
  var Ratings = req.body.Ratings;
  var Review = req.body.Review;
  var data = {
    id: "Restaurant",
    rname: rname,
    Ratings: Ratings,
    Review: Review,
  };
  db.collection("rtable").insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
  });
  return res.redirect("success.html");
});
app.post("/thea", function (req, res) {
  var rname = req.body.rname;
  var Ratings = req.body.Ratings;
  var Review = req.body.Review;
  var data = {
    id: "Theatre",
    rname: rname,
    Ratings: Ratings,
    Review: Review,
  };
  db.collection("rtable").insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
  });
  return res.redirect("success.html");
});
app
  .get("/", function (req, res) {
    res.set({
      "Access-control-Allow-Origin": "*",
    });
    return res.redirect("first.html");
  })
  .listen(3000);
app.get("/rest_aurant", function (req, res) {
  res.set({
    "Access-control-Allow-Origin": "*",
  });
  return res.redirect("first.html");
});
app.get("/", function (req, res) {
  res.set({
    "Access-control-Allow-Origin": "*",
  });
  return res.redirect("first.html");
});

app.get("/data", (req, res) => {
  db.collection("rtable")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
        console.log(result);
      }
    });
});
