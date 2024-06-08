const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (inputString) => {
    const length = inputString.length;

    if (length % 15 === 0) {
        // If divisible by both 3 and 5 (i.e., 15), perform both operations in order.
        const reversedString = inputString.split('').reverse().join('');
        const asciiTransformed = reversedString.split('').map(char => char.charCodeAt(0)).join(' ');
        console.log("Output: ",asciiTransformed);
    } else if (length % 3 === 0) {
        // If divisible by 3, reverse the string.
        const reversedString = inputString.split('').reverse().join('');
        console.log("Output: ",reversedString);
    } else if (length % 5 === 0) {
        // If divisible by 5, replace each character with its ASCII code.
        const asciiTransformed = inputString.split('').map(char => char.charCodeAt(0)).join(' ');
        console.log("Output: ",asciiTransformed);
    } else {
        // If not divisible by 3, 5, or 15, return the original string.
        console.log(inputString);
    }

    rl.close();
});
