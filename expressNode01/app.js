// import express
const express = require("express");
// set the exported express function to app-key
const app = express();
// How to set up routing in express
// logic will search for first match then process that cbfunction
// so must put root path '/' at the end)
app.use('/add-product',(req, res, next) => {
  res.send('<h1>The "Add Product Page" page </h1>');
})

// Then place the root route last
app.use('/',(req, res, next) => {
//  console.log("In another middleware!");
  res.send("<h1>Hello from My First Express App!</h1>");
});

app.listen(3000);
