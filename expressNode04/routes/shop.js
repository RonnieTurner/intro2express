// Import path, set to path
const path = require('path')

const express = require("express");

const router = express.Router();

// use sendFile method, call path then use the join method
// first segment to pass into join is the global variable
// made available by nodeJS __dirname which holds the 
// absolute path to the node project folder
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});
// the '/' should be omitted as path will build the approprate path
// for use on both linux and windows OS
// NOTE: the '../' must be added as __dirname will build absolutely path
// to the file where it is used

module.exports = router;
