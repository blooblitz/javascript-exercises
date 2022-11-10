const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z]/g, "");
    let splitString = str.split("");
    let reverse = splitString.reverse();
    let join = reverse.join("");
    return str === join;
};

// Do not edit below this line
module.exports = palindromes;
