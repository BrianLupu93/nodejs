// 1. Node runs on a server not in a browser
// 2. The console is the terminal window
// 3. global object insterad of window objects
// 4. Has common Core modules that we will explore
// 5. CommonJS modules instead ES6 modules
// 6. Missing some JS APIs like fetch

const os = require("os");
const path = require("path");
const { add, subtract, multiply, divide } = require("../01/math");

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

console.log(add(3, 5));
console.log(subtract(3, 5));
console.log(multiply(3, 5));
console.log(divide(3, 5));
