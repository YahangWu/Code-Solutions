// Efficient Janitor
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
 * Complete the 'efficientJanitor' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts FLOAT_ARRAY weight as parameter.
 */

function efficientJanitor(weight) {
    // Write your code here
    const sortedWeight = weight.sort(function(a,b){return a-b});
    let left = 0;
    let right = weight.length - 1;
    let count = 0;
    while (left <= right) {
        if (left == right) {
            count ++;
            break;
        }
        if(sortedWeight[left] + sortedWeight[right] <= 3.0) {
            left++;
            right--;
            count++;
        } else {
            right--;
            count++;
        }   
    }
    return count;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const weightCount = parseInt(readLine().trim(), 10);

    let weight = [];

    for (let i = 0; i < weightCount; i++) {
        const weightItem = parseFloat(readLine().trim());
        weight.push(weightItem);
    }

    const result = efficientJanitor(weight);

    ws.write(result + '\n');

    ws.end();
}
