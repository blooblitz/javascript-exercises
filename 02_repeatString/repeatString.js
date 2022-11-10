const repeatString = function(stringToRepeat, repeatAmount) {
    if (repeatAmount < 0) return "ERROR";       
    let returnString = "";
    for (let i = 0; i < repeatAmount; i++) {
        returnString += stringToRepeat;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
