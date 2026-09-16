const palindromes = function (string) {
    const lowerString = string.toLowerCase();

    for (let i = 0, j = lowerString.length - 1; j >= i; i++, j--) {
        let s1 = lowerString.at(i);
        let s2 = lowerString.at(j);
        
        while (!isAlphaNumeric(s1)) s1 = lowerString.at(++i);
        while (!isAlphaNumeric(s2)) s2 = lowerString.at(--j);

        if (i < j && (s1 != s2)) return false;
    }

    return true;
};

function isAlphaNumeric(s) {
    return s.toLowerCase() !== s.toUpperCase() || (s >= '0' && s <= '9');
}

// See solution/palindromes-solution.js for practicing array methods

// Do not edit below this line
module.exports = palindromes;
