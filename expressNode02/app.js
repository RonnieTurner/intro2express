// How to handle POST request
// npm install --save body-parser
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Build Middleware to handle parsing, will assign to obj 'body'
app.use(bodyParser.urlencoded({ extended: false }));

// create the middleware to handle the <form> and submit <button>
// NOTE: action="/product" will redirect to that url once submitted
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});
// NOTE: app.post() is used to filter out other possilbe rquest
// a GET request will not trigger this middleware, but will go to next MW '/'
// build the middleware to handle the POST request /product url
app.post("/product", (req, res, next) => {
  //print new key: value pair assigned to body obj
  console.log(req.body);
  //dont forget to redirect, otherwise will spin forever
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from My First Express App!</h1>");
});

app.listen(3000);
