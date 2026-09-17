const fibonacci = function(idx) {
    if (!isValidInt(idx)) return "OOPS";
};

function isValidInt(input) {
    const number = +input;
    return Number.isInteger(number) && number > 0;
};

// Do not edit below this line
module.exports = fibonacci;
