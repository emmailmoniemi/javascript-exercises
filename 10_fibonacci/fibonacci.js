const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    let result = [0];
    for (let i = 0; i < num; i++) {
        if(i === 0) {
            result.push(1);
        } else {
        result.push(result[i] + result[i - 1]);
        }
    }
    return result[num];

};

// Do not edit below this line
module.exports = fibonacci;
