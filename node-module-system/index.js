const firstModule = require("./first-module");

console.log(firstModule.add(5,4));

// catching the error thrown by divide function
try{
    console.log(firstModule.divide(10, 0))
} catch(err){
    console.log("caught error :", err.message)
}