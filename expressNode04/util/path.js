const path = require("path");

// dirname() returns the directory name of a path
// require.main.filename pulls the filename of the main
// file that is ran with server is spun up, app.js in this case
module.exports = path.dirname(require.main.filename);
// once exported it can be used in any .js file to find the absolute path
