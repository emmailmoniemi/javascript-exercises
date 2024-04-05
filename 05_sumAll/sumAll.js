const sumAll = function(int1, int2) {
    let sum = 0;

    if (int1 < 0 || int2 < 0 || !Number.isInteger(int1) || !Number.isInteger(int2)) {
        return 'ERROR';
    }
    else if (int1 > int2) {
        for (let i = int2; i <= int1; i++) {
            sum += i;
        }
    }
    else if (int2 > int1) {
        console.log(sum);
        for (let i = int1; i <= int2; i++) {
            sum += i;
            console.log(sum);
        }
    } else {
        sum = int1 + int2;
    }
    return sum;
};

console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
