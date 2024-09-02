/**
 * Solves a linear equation of the form ax + b = 0.
 * @param {number} a - The coefficient of x.
 * @param {number} b - The constant term.
 * @returns {number} - The solution for x.
 * @throws {Error} - If the coefficient 'a' is zero.
 */
function solveLinearEquation(a, b) {
    if (a === 0) {
        throw new Error("Coefficient 'a' cannot be zero.");
    }
    return -b / a;
}

/**
 * Solves a quadratic equation of the form ax^2 + bx + c = 0.
 * @param {number} a - The coefficient of x^2.
 * @param {number} b - The coefficient of x.
 * @param {number} c - The constant term.
 * @returns {number[]} - The two solutions for x.
 * @throws {Error} - If the coefficient 'a' is zero or if no real roots exist.
 */
function solveQuadraticEquation(a, b, c) {
    if (a === 0) {
        throw new Error("Coefficient 'a' cannot be zero.");
    }
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant < 0) {
        throw new Error("No real roots exist.");
    }
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
}

/**
 * Adds two polynomials.
 * @param {number[]} p1 - The first polynomial represented as an array of coefficients.
 * @param {number[]} p2 - The second polynomial represented as an array of coefficients.
 * @returns {number[]} - The resulting polynomial after addition.
 */
function addPolynomials(p1, p2) {
    return p1.map((coeff, index) => coeff + (p2[index] || 0));
}

/**
 * Subtracts the second polynomial from the first.
 * @param {number[]} p1 - The first polynomial represented as an array of coefficients.
 * @param {number[]} p2 - The second polynomial represented as an array of coefficients.
 * @returns {number[]} - The resulting polynomial after subtraction.
 */
function subtractPolynomials(p1, p2) {
    return p1.map((coeff, index) => coeff - (p2[index] || 0));
}

/**
 * Multiplies two polynomials.
 * @param {number[]} p1 - The first polynomial represented as an array of coefficients.
 * @param {number[]} p2 - The second polynomial represented as an array of coefficients.
 * @returns {number[]} - The resulting polynomial after multiplication.
 */
function multiplyPolynomials(p1, p2) {
    const result = Array(p1.length + p2.length - 1).fill(0);
    p1.forEach((coeff1, i) => {
        p2.forEach((coeff2, j) => {
            result[i + j] += coeff1 * coeff2;
        });
    });
    return result;
}

/**
 * Simplifies a mathematical expression.
 * @param {string} expression - The mathematical expression to simplify.
 * @returns {number} - The simplified result.
 */
function simplifyExpression(expression) {
    return eval(expression);
}

module.exports = {
    solveLinearEquation,
    solveQuadraticEquation,
    addPolynomials,
    subtractPolynomials,
    multiplyPolynomials,
    simplifyExpression
};
