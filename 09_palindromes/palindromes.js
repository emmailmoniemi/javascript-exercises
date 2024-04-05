const palindromes = function (str) {
   let strNormalized = (str.toLowerCase()).replace(/\W/g, '');
   return strNormalized == strNormalized.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
