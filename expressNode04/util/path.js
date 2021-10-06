const path = require("path");

// dirname() returns the directory name of a path
// require.main.filename pulls the filename of the main
// file that is ran with server is spun up, app.js in this case
module.exports = path.dirname(require.main.filename);
// once exported it can be used in any .js file to find the absolute path

/* More on path.dirname(require.main.filename)
   path.dirname, returns path form of specified directory
   
   require.main is the module object representing the entry point
   script loaded at start and .filename stores the absolute path
   within the require.main obj 
   
   module(
   filename: 'absolute/path/to/entry.js 
   )
   
   entry.js is described in package.json */
