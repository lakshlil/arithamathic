/**
 * Performs addition of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The result of adding a and b.
 */
function add(a, b) {
    return a + b;
}

/**
 * Performs subtraction of two numbers.
 * @param {number} a - The minuend.
 * @param {number} b - The subtrahend.
 * @returns {number} - The result of subtracting b from a.
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Performs multiplication of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The result of multiplying a and b.
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Performs division of two numbers.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} - The result of dividing a by b.
 * @throws {Error} - If b is zero, throws an error to prevent division by zero.
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

/**
 * Computes the modulus (remainder) of two numbers.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} - The remainder of a divided by b.
 */
function modulus(a, b) {
    return a % b;
}

/**
 * Computes the exponentiation of a base number raised to a given exponent.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent to which the base number is raised.
 * @returns {number} - The result of raising base to the power of exponent.
 */
function exponentiate(base, exponent) {
    return Math.pow(base, exponent);
}

/**
 * Performs floor division of two numbers.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} - The result of floor dividing a by b.
 * @throws {Error} - If b is zero, throws an error to prevent division by zero.
 */
function floorDivide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return Math.floor(a / b);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    remainder: modulus,
    exponentiate,
    floorDivide
};
