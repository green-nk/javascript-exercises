const palindromes = function (string) {
    for (let i = 0, j = string.length - 1; j >= i; i++, j--) {
        if (string.at(i) != string.at(j)) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
