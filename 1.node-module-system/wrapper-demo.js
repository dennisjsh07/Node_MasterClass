const wrapperExplorer = require("./wrapper-explorer");

// Note : the code of wrapper-explorer.js is wrapped after importing like this
// (function (exports, require, module, __filename, __dirname) { ...code of wrapper-explorer.js })

console.log("in wrapper demo.js");

console.log("__filename in wrapper-demo.js", __filename);
console.log("__dirname in wrapper-demo.js", __dirname);

console.log(wrapperExplorer.greet("Dennis Joshua"));