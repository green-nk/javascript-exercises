const fibonacci = function(idx) {
    if (!isValidInt(idx)) return "OOPS";

    // 0, 1, 1, 2, 3, 5, 8, ...
    let fiboSeq = [0, 1];
    for (let i = 2; i <= idx; i++) {
        const num = fiboSeq[i - 1] + fiboSeq[i - 2];
        fiboSeq.push(num);
    }
 
    return fiboSeq.at(idx);
};

function isValidInt(input) {
    const number = +input;
    return Number.isInteger(number) && number >= 0;
};

// Do not edit below this line
module.exports = fibonacci;
