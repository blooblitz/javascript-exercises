const removeFromArray = function(array, ...argsToRemove) {
    argsToRemove.forEach(arg => {
        array.forEach((element, index) => {
            if (array[index] === arg) {
                array.splice(index, 1);
            }
        });
    });
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
