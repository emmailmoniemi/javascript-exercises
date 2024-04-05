const reverseString = function(string) {
    let resultString = ''
    const splitString = string.split('');

    for (let i = string.length - 1; i >= 0; i--) {
        resultString += splitString[i];
    }
    return resultString;
};

// Do not edit below this line
module.exports = reverseString;
