/**
 * Performs ascending sort on an array of numbers.
 * @param {number[]} arr - The array of numbers to sort.
 * @returns {number[]} - The sorted array in ascending order.
 */
function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
}

/**
 * Performs descending sort on an array of numbers.
 * @param {number[]} arr - The array of numbers to sort.
 * @returns {number[]} - The sorted array in descending order.
 */
function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

/**
 * Searches for a value in an array using linear search.
 * @param {number[]} arr - The array to search through.
 * @param {number} target - The value to search for.
 * @returns {number} - The index of the target value, or -1 if not found.
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

/**
 * Searches for a value in a sorted array using binary search.
 * @param {number[]} arr - The sorted array to search through.
 * @param {number} target - The value to search for.
 * @returns {number} - The index of the target value, or -1 if not found.
 */
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

/**
 * Generates a random integer between min and max (inclusive).
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - The generated random integer.
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Performs addition on complex numbers.
 * @param {Object} c1 - The first complex number (e.g., { real: 1, imaginary: 2 }).
 * @param {Object} c2 - The second complex number (e.g., { real: 3, imaginary: 4 }).
 * @returns {Object} - The sum of the two complex numbers.
 */
function addComplex(c1, c2) {
    return {
        real: c1.real + c2.real,
        imaginary: c1.imaginary + c2.imaginary
    };
}

/**
 * Performs subtraction on complex numbers.
 * @param {Object} c1 - The first complex number.
 * @param {Object} c2 - The second complex number.
 * @returns {Object} - The difference of the two complex numbers.
 */
function subtractComplex(c1, c2) {
    return {
        real: c1.real - c2.real,
        imaginary: c1.imaginary - c2.imaginary
    };
}

/**
 * Performs multiplication on complex numbers.
 * @param {Object} c1 - The first complex number.
 * @param {Object} c2 - The second complex number.
 * @returns {Object} - The product of the two complex numbers.
 */
function multiplyComplex(c1, c2) {
    return {
        real: c1.real * c2.real - c1.imaginary * c2.imaginary,
        imaginary: c1.real * c2.imaginary + c1.imaginary * c2.real
    };
}

/**
 * Performs division on complex numbers.
 * @param {Object} c1 - The first complex number.
 * @param {Object} c2 - The second complex number.
 * @returns {Object} - The quotient of the two complex numbers.
 */
function divideComplex(c1, c2) {
    const denominator = c2.real * c2.real + c2.imaginary * c2.imaginary;
    return {
        real: (c1.real * c2.real + c1.imaginary * c2.imaginary) / denominator,
        imaginary: (c1.imaginary * c2.real - c1.real * c2.imaginary) / denominator
    };
}

/**
 * Performs modular exponentiation.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @param {number} modulus - The modulus.
 * @returns {number} - The result of (base^exponent) % modulus.
 */
function modularExponentiation(base, exponent, modulus) {
    let result = 1;
    base = base % modulus;
    while (exponent > 0) {
        if (exponent % 2 === 1) result = (result * base) % modulus;
        exponent = Math.floor(exponent / 2);
        base = (base * base) % modulus;
    }
    return result;
}

/**
 * Converts a number from decimal to binary.
 * @param {number} num - The decimal number.
 * @returns {string} - The binary representation of the number.
 */
function decimalToBinary(num) {
    return num.toString(2);
}

/**
 * Converts a number from decimal to octal.
 * @param {number} num - The decimal number.
 * @returns {string} - The octal representation of the number.
 */
function decimalToOctal(num) {
    return num.toString(8);
}

/**
 * Converts a number from decimal to hexadecimal.
 * @param {number} num - The decimal number.
 * @returns {string} - The hexadecimal representation of the number.
 */
function decimalToHexadecimal(num) {
    return num.toString(16).toUpperCase();
}

/**
 * Converts a number from one base to another.
 * @param {string} num - The number in the original base.
 * @param {number} fromBase - The base of the input number.
 * @param {number} toBase - The base to convert the number to.
 * @returns {string} - The number in the target base.
 */
function baseConversion(num, fromBase, toBase) {
    return parseInt(num, fromBase).toString(toBase).toUpperCase();
}

/**
 * Performs bitwise AND operation.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The result of the bitwise AND operation.
 */
function bitwiseAnd(a, b) {
    return a & b;
}

/**
 * Performs bitwise OR operation.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The result of the bitwise OR operation.
 */
function bitwiseOr(a, b) {
    return a | b;
}

/**
 * Performs bitwise XOR operation.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The result of the bitwise XOR operation.
 */
function bitwiseXor(a, b) {
    return a ^ b;
}

/**
 * Performs bitwise NOT operation.
 * @param {number} a - The number.
 * @returns {number} - The result of the bitwise NOT operation.
 */
function bitwiseNot(a) {
    return ~a;
}

/**
 * Performs bitwise left shift operation.
 * @param {number} a - The number to shift.
 * @param {number} n - The number of positions to shift.
 * @returns {number} - The result of the left shift operation.
 */
function leftShift(a, n) {
    return a << n;
}

/**
 * Performs bitwise right shift operation.
 * @param {number} a - The number to shift.
 * @param {number} n - The number of positions to shift.
 * @returns {number} - The result of the right shift operation.
 */
function rightShift(a, n) {
    return a >> n;
}

/**
 * Rounds a number to the nearest integer.
 * @param {number} num - The number to round.
 * @returns {number} - The rounded number.
 */
function round(num) {
    return Math.round(num);
}

/**
 * Rounds a number up to the nearest integer.
 * @param {number} num - The number to round up.
 * @returns {number} - The rounded-up number.
 */
function ceil(num) {
    return Math.ceil(num);
}

/**
 * Rounds a number down to the nearest integer.
 * @param {number} num - The number to round down.
 * @returns {number} - The rounded-down number.
 */
function floor(num) {
    return Math.floor(num);
}

/**
 * Computes the natural logarithm of a number.
 * @param {number} num - The number to compute the logarithm for.
 * @returns {number} - The natural logarithm of the number.
 */
function naturalLog(num) {
    return Math.log(num);
}

/**
 * Computes the common logarithm (base 10) of a number.
 * @param {number} num - The number to compute the logarithm for.
 * @returns {number} - The common logarithm of the number.
 */
function commonLog(num) {
    return Math.log10(num);
}

/**
 * Computes the logarithm of a number with an arbitrary base.
 * @param {number} num - The number to compute the logarithm for.
 * @param {number} base - The base of the logarithm.
 * @returns {number} - The logarithm of the number with the given base.
 */
function arbitraryBaseLog(num, base) {
    return Math.log(num) / Math.log(base);
}

module.exports = {
    sortAscending,
    sortDescending,
    linearSearch,
    binarySearch,
    randomInt,
    addComplex,
    subtractComplex,
    multiplyComplex,
    divideComplex,
    modularExponentiation,
    decimalToBinary,
    decimalToOctal,
    decimalToHexadecimal,
    baseConversion,
    bitwiseAnd,
    bitwiseOr,
    bitwiseXor,
    bitwiseNot,
    leftShift,
    rightShift,
    round,
    ceil,
    floor,
    naturalLog,
    commonLog,
    arbitraryBaseLog
};
