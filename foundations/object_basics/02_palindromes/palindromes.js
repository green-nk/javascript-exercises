const palindromes = function (string) {
    const lowerString = string.toLowerCase();

    for (let i = 0, j = lowerString.length - 1; j >= i; i++, j--) {
        let s1 = lowerString.at(i);
        let s2 = lowerString.at(j);
        
        while (!isLower(s1)) s1 = lowerString.at(++i);
        while (!isLower(s2)) s2 = lowerString.at(--j);

        if (i < j && (s1 != s2)) return false;
    }

    return true;
};

function isLower(s) {
    const c = s.charCodeAt(0);
    return c >= 97 && c <= 122; // a-z
}

// Do not edit below this line
module.exports = palindromes;
