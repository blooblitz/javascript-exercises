const reverseString = function(string) {
    let strArray = string.split("");
    strArray = strArray.reverse();
    string = strArray.join("");
    return string;z
};

// Do not edit below this line
module.exports = reverseString;
