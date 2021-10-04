// Set the router object exported from admin to adminRoutes, which is valid middleware function
const adminRoutes = require("./routes/admin");

// Set the router object exported from shop to shopRoutes
const shopRoutes = require("./routes/shop");

// Build Middleware to handle parsing, will assign to obj 'body'
app.use(bodyParser.urlencoded({ extended: false }));

// insert the adminRoutes obj in middleware to 'activate' those routes,
// includes '/admin' filter to add common starting url segment
// prevents us from repeating same url, saving time
app.use("/admin", adminRoutes);

// insert the shopRoutes obj in middlware to activate those routes
app.use(shopRoutes);

// set handler for any bad URL, with 404 status()
app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);
