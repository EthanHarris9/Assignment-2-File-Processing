// Importing the functions from the textAnalyzer file
const { sumArr, findHighAndLow, calculateAverage } = require('../src/numberProcessor.js');

// Testing multiple input types for the number processor sumArr function
describe('Number Processor Tests for sumArr Function', () => {
    test('should calculate the sum of all numbers', () => {
        const result = sumArr([5, 10, 3, 8]);
        expect(result).toBe(26);
    });

    test('should return 0 for an empty array', () => {
        const result = sumArr([]);
        expect(result).toBe(0);
    });

    test('should handle negative numbers', () => {
        const result = sumArr([-5, -10, 15]);
        expect(result).toBe(0);
    });

    test('should handle decimal numbers', () => {
        const result = sumArr([1.5, 2.5, 3]);
        expect(result).toBe(7);
    });
});