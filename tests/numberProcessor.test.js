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

// Testing multiple input types for the number processor findHighAndLow function
describe('Number Processor Tests for findHighAndLow Function', () => {
    test('should find the highest and lowest numbers', () => {
        const result = findHighAndLow([5, 10, 3, 8]);
        expect(result).toEqual({highest: 10, lowest: 3});
    });

    test('should handle an array with one number', () => {
        const result = findHighAndLow([6]);
        expect(result).toEqual({highest: 6, lowest: 6});
    });

    test('should handle negative numbers', () => {
        const result = findHighAndLow([-5, -10, -15]);
        expect(result).toEqual({highest: -5, lowest: -15});
    });

    test('should handle an array with the same numbers', () => {
        const result = findHighAndLow([3, 3, 3]);
        expect(result).toEqual({highest: 3, lowest: 3});
    });

    test('should handle an empty array', () => {
        const result = findHighAndLow([]);
        expect(result).toEqual({highest: null, lowest: null});
    });
});

// Testing multiple input types for the number processor calculateAverage function
describe('Number Processor Tests for calculateAverage Function', () => {
    test('should calculate the average of all numbers', () => {
        const result = calculateAverage([10, 20, 30, 40]);
        expect(result).toBe(25);
    });

    test('should handle decimal averages', () => {
        const result = calculateAverage([2, 3, 4]);
        expect(result).toBe(3);
    });

    test('should handle negative numbers', () => {
        const result = calculateAverage([-5, -10, -15]);
        expect(result).toBe(-10);
    });

    test('should return 0 for an empty array', () => {
        const result = calculateAverage([]);
        expect(result).toBe(0);
    });
});
