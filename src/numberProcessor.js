const fs = require('fs');

const fileContent = fs.readFileSync('./data/sample-numbers.txt', 'utf8');

// Converting the text into numbers
const lines = scoresText.split('\n');
const numbers = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim(); // Remove extra whitespace
    if (line.length > 0) {
      numbers.push(parseFloat(line)); // Convert to numbers
    }
}

// Function to compute the sum of all numbers in the file
function sumArr(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum;
}

function findHighAndLow(arr) {
    let highest = arr[0];
    let lowest = arr[0];

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] > highest) {
            highest = arr[i];
        }
        if(arr[i] < lowest) {
            lowest = arr[i];
        }
        
    }
    return {highest, lowest};
}



// Testing the functions

console.log("Testing number processor functions in sample-numbers.txt:");
console.log("Sum =", sumArr(fileContent))
console.log("Highest and Lowest =", findHighAndLow(fileContent))
