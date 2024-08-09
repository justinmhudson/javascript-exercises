const reverseString = userString => {
    let reversedString = '';
    let numberOfChars = userString.length;
    for(let i = numberOfChars; i > 0; i--) {
        let lastChar = userString[i - 1];
        reversedString = reversedString.concat(lastChar);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
