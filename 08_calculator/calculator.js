const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
};

const multiply = function(numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
};

const power = function(x, y) {
	let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x
  }
  return result;
};

const factorial = function(x) {
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= i
  }
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
