const fs = require('fs');

const fileContent = fs.readFileSync('./data/quotes.txt', 'utf8');
const fileContent2 = fs.readFileSync('./data/sample-text.txt', 'utf8');

// Function to compute the word count of a file
function wordCount(content) {
    if (content.trim() === "") {
        return 0;
    }

    // Count the total number of words from the file
    const words = content.trim().split(/\s+/);
    return words.length;
}

// Function to find the longets word from the file
function longestWord(content) {
    if (content.trim() === "") {
        return 0;
    }

    const words = content.trim().split(/\s+/);
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i].trim();

        // Checking whether the current word is longer than the longest word currently found
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }
    return longestWord;
}

// Function to find the line count in a file
function lineCount(content) {
    if (content === "") {
        return 0;
    }

    // Count the total number of lines from the file
    const lines = content.split(/\r?\n/);

    // Remove extra empty line element at the end for when there is a blank line
    if (lines[lines.length - 1] === "") {
        lines.pop()
    }

    return lines.length;
}

// testing the functions
if (require.main === module) {

console.log("Testing text analyzer functions in quotes.txt:");
console.log("Word Count =", wordCount(fileContent))
console.log("Longest Word =", longestWord(fileContent))
console.log("Line Count =", lineCount(fileContent))

console.log("Testing text analyzer functions in sample-text.txt:");
console.log("Word Count =", wordCount(fileContent2))
console.log("Longest Word =", longestWord(fileContent2))
console.log("Line Count =", lineCount(fileContent2))

}

// Export functions for testing with Jest
module.exports = { wordCount, longestWord, lineCount };