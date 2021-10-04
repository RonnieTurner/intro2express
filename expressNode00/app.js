// import express
const express = require("express");
// set the exported express function to app-key
const app = express();
// set up app for middleware functionality
app.use((req, res, next) => {
  console.log("In the middleware!");
  // when not sending response one must call next()
  // to proceed to next step
  next();
});
// setup middleware with a text response via res.send()
app.use((req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from My First Express App!</h1>");
}); // NOTE: did not use next() as res.send() will exit loop
// NOTE: if first app.use sent a response the second app.use
// would never be reached, it breaks the next() chain

app.listen(3000);

// Old Way, before expreess
// const server = http.createServer(app);
//
// server.listen(3000);
