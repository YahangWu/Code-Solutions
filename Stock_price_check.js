// In securities research, an analyst will look at a number of attributes for a stock. One analyst would like to keep a record of the highest positive spread between a closing price and the closing price on any prior day in history. Determine the maximum positive spread for a stock given its price history. If the stock remains flat or declines for the full period, return -1. 
// Example 0 px [7, 1, 2, 5] 
// Calculate the positive difference between each price and its predecessors: 
// • At the first quote, there is no earlier quote to compare to. • At the second quote, there was no earlier price that was lower. • At the third quote, the price is higher than the second quote: • For the fourth quote, the price is higher than the third and the second quotes: • The maximum difference is 4. 
// Example 1 px = [7, 5, 3, 1] 
// • The price declines each quote, so there is never a difference greater than O. In this case, return -1. 
// Function Description Complete the function maxDifference in the editor below. 
// maxDifference has the following parameters: int px[n]: an array of stock prices (quotes) 
// Returns: int: the maximum difference between two prices as described above 

// Constrains 
// 1 <= n <= 10^5
// -10^5 < px[i] < 10^5

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
 * Complete the 'maxDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY px as parameter.
 */

function maxDifference(px) {
    // Write your code here
    let maxDifference = -1;
    let minPrice = px[0];
    for (let i = 1; i < px.length; ++i){
        if (px[i] >= minPrice) {
            const temp = px[i] - minPrice;
            if (temp > maxDifference) maxDifference = temp;
            continue;
        }
        minPrice = px[i]; 
    }
    if (maxDifference === 0) maxDifference = -1;
    return maxDifference;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const pxCount = parseInt(readLine().trim(), 10);

    let px = [];

    for (let i = 0; i < pxCount; i++) {
        const pxItem = parseInt(readLine().trim(), 10);
        px.push(pxItem);
    }

    const result = maxDifference(px);

    ws.write(result + '\n');

    ws.end();
}
