// Chair requirements

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
 * Complete the 'minChairs' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY simulations as parameter.
 */

function minChairs(simulations) {
    // Write your code here
    const result = [];
    for (let simulation of simulations) {
        let total = 0;
        let available = 0;
        for (let action of simulation) {
            switch (action) {
                case "C": {
                    if (available == 0) total++;
                    if (available > 0) {
                        available = available - 1;
                    }
                    break;
                }
                case "R": {
                    available = available + 1;
                    break;
                }
                case "U": {
                    if (available == 0) total++;
                    if (available > 0) {
                        available = available - 1;
                    }
                    break;
                }
                case "L": {
                    available = available + 1;
                    break;
                }
                default:
                    break;
            }
        }
        result.push(total);
    }
    return result;
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const simulationsCount = parseInt(readLine().trim(), 10);

  let simulations = [];

  for (let i = 0; i < simulationsCount; i++) {
      const simulationsItem = readLine();
      simulations.push(simulationsItem);
  }

  const result = minChairs(simulations);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
