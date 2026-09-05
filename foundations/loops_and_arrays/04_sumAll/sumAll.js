const sumAll = function(a, b) {
    if (!isValidInput(a) || !isValidInput(b)) return "ERROR";

    let fromNum = a;
    let toNum = b;
    if (a > b) {
        fromNum = b;
        toNum = a;
    }

    let result = 0;
    for (let num = fromNum; num <= toNum; num++) {
        result += num;
    }

    return result;
};

function isValidInput(inp) {
    return Number.isInteger(inp) && inp >= 0;
}

// Do not edit below this line
module.exports = sumAll;
