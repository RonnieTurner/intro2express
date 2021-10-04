const express = require("express");

// set the express method Router() to const router
const router = express.Router();

// create the middleware to handle the <form> and submit <button>
// NOTE: /admin can bee omitted from the router.get('/add-product')
// as this is prefixed by the adminRoute middleware; see app.js
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

// can have a get and a post method for same url
router.post("/add-product", (req, res, next) => {
  //print new key: value pair assigned to body obj
  console.log(req.body);
  //dont forget to redirect, otherwise will spin forever
  res.redirect("/");
});

module.exports = router;
