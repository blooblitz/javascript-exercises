let firstPrevious = 0;
let lastPrevious = 0;
let currentNum = 1;

function fibonacci(number) {
    if (number < 1) return "OOPS"
    if (number <= 2 ) return 1;
    else return (fibonacci(number - 1) + fibonacci(number - 2));
}

// Do not edit below this line
module.exports = fibonacci;
