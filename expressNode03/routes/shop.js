const express = require("express");

// set express method Router() to const router
const router = express.Router();

// use router.get to filter any post requests
router.get("/", (req, res, next) => {
  res.send("<h1>Hello from My First Express App!</h1>");
});

module.exports = router;
