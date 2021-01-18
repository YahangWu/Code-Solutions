// Last and second last

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'lastLetters' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING word as parameter.
 */

function lastLetters(word) {
    // Write your code here
    if (word.length >= 2 && word.length <= 100) {
        return word.charAt(word.length-1) + " " + word.charAt(word.length-2)
    }
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const word = readLine();

    const result = lastLetters(word);

    ws.write(result + '\n');

    ws.end();
}
