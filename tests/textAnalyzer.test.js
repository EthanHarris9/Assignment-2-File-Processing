// Importing the functions from the textAnalyzer file
const { wordCount, longestWord, lineCount } = require('../src/textAnalyzer.js');


// Testing multiple input types for the text analyzer wordCount function
describe('Text Analyzer Tests for wordCount Function', () => {
    test('should count the total number of words in a simple string', () => {
        const result = wordCount('This is a test using Jest');
        expect(result).toBe(6);
    });

    test('should handle empty strings', () => {
        const result = wordCount('');
        expect(result).toBe(0);
    });

    test('should handle extra whitespace', () => {
        const result = wordCount('  extra  spaces  to  test  ');
        expect(result).toBe(4);
    });
});