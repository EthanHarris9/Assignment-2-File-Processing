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

// Testing multiple input types for the text analyzer longestWord function
describe('Text Analyzer Tests for longestWord Function', () => {
    test('should return the longest word in a simple string', () => {
        const result = longestWord('Looking for a long word');
        expect(result).toBe('Looking');
    });

    test('should handle an empty word string', () => {
        const result = longestWord('');
        expect(result).toBe(0);
    });

    test('should handle a one word string', () => {
        const result = longestWord('JavaScript');
        expect(result).toBe('JavaScript');
    });
    test('should return the first word encountered if a tie occurs', () => {
        const result = longestWord('Big dog and cat');
        expect(result).toBe('Big');
    });
});

// Testing multiple input types for the text analyzer lineCount function
describe('Text Analyzer Tests for lineCount Function', () => {
    test('should return the number of lines in a simple string', () => {
        const result = lineCount('this is the first line\nsecond line\nthird line');
        expect(result).toBe(3);
    });

    test('should handle zero lines', () => {
        const result = lineCount('');
        expect(result).toBe(0);
    });

    test('should handle one line that is empty', () => {
        const result = lineCount('\n');
        expect(result).toBe(1);
    });
});

