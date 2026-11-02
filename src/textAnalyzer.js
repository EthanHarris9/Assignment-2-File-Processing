const fs = require('fs');

const fileContent = fs.readFileSync('quotes.txt', 'utf8');
const fileContent2 = fs.readFileSync('sample-text.txt', 'utf8');

// Function to compute the word count of a file
function wordCount(content) {
    if (content.trim() === "") {
        return 0;
    }

    // Count the total number of words from the file
    const words = content.trim().split(/\s+/);
    return words.length;
}

console.log("Testing text analyzer functions in quotes.txt:");
console.log("Word Count =", wordCount(fileContent))
