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