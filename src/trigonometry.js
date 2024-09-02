/**
 * Calculates the sine of an angle in radians.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The sine of the angle.
 */
function sine(angle) {
    return Math.sin(angle);
}

/**
 * Calculates the cosine of an angle in radians.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The cosine of the angle.
 */
function cosine(angle) {
    return Math.cos(angle);
}

/**
 * Calculates the tangent of an angle in radians.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The tangent of the angle.
 */
function tangent(angle) {
    return Math.tan(angle);
}

/**
 * Calculates the cosecant of an angle in radians.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The cosecant of the angle.
 */
function cosecant(angle) {
    return 1 / Math.sin(angle);
}

/**
 * Calculates the secant of an angle in radians.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The secant of the angle.
 */
function secant(angle) {
    return 1 / Math.cos(angle);
}

/**
 * Calculates the cotangent of an angle in radians.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The cotangent of the angle.
 */
function cotangent(angle) {
    return 1 / Math.tan(angle);
}

/**
 * Calculates the arcsine (inverse sine) of a value.
 * @param {number} value - The value for which to calculate the arcsine.
 * @returns {number} - The angle in radians whose sine is the given value.
 */
function arcsin(value) {
    return Math.asin(value);
}

/**
 * Calculates the arccosine (inverse cosine) of a value.
 * @param {number} value - The value for which to calculate the arccosine.
 * @returns {number} - The angle in radians whose cosine is the given value.
 */
function arccos(value) {
    return Math.acos(value);
}

/**
 * Calculates the arctangent (inverse tangent) of a value.
 * @param {number} value - The value for which to calculate the arctangent.
 * @returns {number} - The angle in radians whose tangent is the given value.
 */
function arctan(value) {
    return Math.atan(value);
}

/**
 * Calculates the Law of Sines for a given set of angles and sides.
 * @param {number} a - Length of side a.
 * @param {number} b - Length of side b.
 * @param {number} A - Angle opposite side a (in radians).
 * @param {number} B - Angle opposite side b (in radians).
 * @returns {number} - The ratio of the sides to the sines of their opposite angles.
 */
function lawOfSines(a, b, A, B) {
    return (a / Math.sin(A)) === (b / Math.sin(B));
}

/**
 * Calculates the Law of Cosines for a given set of sides and an angle.
 * @param {number} a - Length of side a.
 * @param {number} b - Length of side b.
 * @param {number} c - Length of side c.
 * @param {number} angle - Angle between sides a and b (in radians).
 * @returns {number} - The length of side c.
 */
function lawOfCosines(a, b, angle) {
    return Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(angle));
}

/**
 * Calculates a basic trigonometric identity (e.g., sin^2(x) + cos^2(x) = 1).
 * @param {number} x - The angle in radians.
 * @returns {boolean} - True if the identity holds, false otherwise.
 */
function trigonometricIdentity(x) {
    return Math.abs(Math.sin(x) ** 2 + Math.cos(x) ** 2 - 1) < 1e-10;
}

/**
 * Converts an angle from degrees to radians.
 * @param {number} degrees - The angle in degrees.
 * @returns {number} - The angle in radians.
 */
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

/**
 * Converts an angle from radians to degrees.
 * @param {number} radians - The angle in radians.
 * @returns {number} - The angle in degrees.
 */
function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

module.exports = {
    sine,
    cosine,
    tangent,
    cosecant,
    secant,
    cotangent,
    arcsin,
    arccos,
    arctan,
    lawOfSines,
    lawOfCosines,
    trigonometricIdentity,
    degreesToRadians,
    radiansToDegrees
};
