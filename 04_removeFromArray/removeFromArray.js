const removeFromArray = function(inputArray, ...toRemove) {
    let returnedArray = inputArray;

    for (let i = inputArray.length - 1; i >= 0; i--) {
        if (toRemove.includes(inputArray[i])) {
            returnedArray.splice(i, 1);
        }
    }
    return returnedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
