console.log("node module wrapper demo");

console.log("__filename in explorer file :", __filename);
console.log("__dirname in explorer file :", __dirname);

module.exports.greet = function(name){
    console.log(`hi my name is ${name}`);
}