// Start coding here
let calculator = {
    add: (a,b) => a+b,
    subtract: (a,b) => {
        return a-b
    }
};

function multiply(a, b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}



calculator["multiply"] = multiply = (a, b) => a*b;
calculator.divide = divide;

let addResult = calculator.add(10,20);
let divideResult = calculator.divide(3000,10);

console.log(calculator)
console.log(addResult)
console.log(divideResult)