function add(a, b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

// throwing an error...
function divide(a,b){
    if(b===0){
        throw new Error("Division by zero is not allowed");
    }

    return a/b;
}

module.exports = {
    add,
    subtract,
    divide
}