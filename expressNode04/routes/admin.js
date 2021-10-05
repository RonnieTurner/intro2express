// Dont forget to import path :>
const path = require("path");

const express = require("express");

const router = express.Router();

// import the methed we created in path.js for pulling
// root directory pathname
const rootDir = require("../util/path");

// Another way of grabbing the absolute path is to build a module, here called path.js
// use like __dirname but does not need '../' like in shop as it pull pathname by 
// referrencing the main module used when server is created, in this case app.js
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// can have a get and a post method for same url
router.post("/add-product", (req, res, next) => {
  //print new key: value pair assigned to body obj
  console.log(req.body);
  //dont forget to redirect, otherwise will spin forever
  res.redirect("/");
});

module.exports = router;
