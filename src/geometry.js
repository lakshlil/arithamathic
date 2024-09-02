/**
 * Calculates the area of a rectangle.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @returns {number} - The area of the rectangle.
 */
function areaRectangle(width, height) {
    return width * height;
}

/**
 * Calculates the perimeter of a rectangle.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @returns {number} - The perimeter of the rectangle.
 */
function perimeterRectangle(width, height) {
    return 2 * (width + height);
}

/**
 * Calculates the area of a circle.
 * @param {number} radius - The radius of the circle.
 * @returns {number} - The area of the circle.
 */
function areaCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

/**
 * Calculates the circumference of a circle.
 * @param {number} radius - The radius of the circle.
 * @returns {number} - The circumference of the circle.
 */
function circumferenceCircle(radius) {
    return 2 * Math.PI * radius;
}

/**
 * Calculates the area of a triangle using Heron's formula.
 * @param {number} a - The length of the first side of the triangle.
 * @param {number} b - The length of the second side of the triangle.
 * @param {number} c - The length of the third side of the triangle.
 * @returns {number} - The area of the triangle.
 * @throws {Error} - If the sides do not form a valid triangle.
 */
function areaTriangle(a, b, c) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    if (isNaN(area) || area <= 0) {
        throw new Error("Invalid triangle sides.");
    }
    return area;
}

/**
 * Calculates the volume of a sphere.
 * @param {number} radius - The radius of the sphere.
 * @returns {number} - The volume of the sphere.
 */
function volumeSphere(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

/**
 * Calculates the surface area of a sphere.
 * @param {number} radius - The radius of the sphere.
 * @returns {number} - The surface area of the sphere.
 */
function surfaceAreaSphere(radius) {
    return 4 * Math.PI * Math.pow(radius, 2);
}

/**
 * Calculates the distance between two points in a 2D plane.
 * @param {number} x1 - The x-coordinate of the first point.
 * @param {number} y1 - The y-coordinate of the first point.
 * @param {number} x2 - The x-coordinate of the second point.
 * @param {number} y2 - The y-coordinate of the second point.
 * @returns {number} - The distance between the two points.
 */
function distanceBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

/**
 * Calculates the angle between two vectors in degrees.
 * @param {number[]} vector1 - The first vector represented as an array [x, y].
 * @param {number[]} vector2 - The second vector represented as an array [x, y].
 * @returns {number} - The angle between the vectors in degrees.
 */
function angleBetweenVectors(vector1, vector2) {
    const dotProduct = vector1[0] * vector2[0] + vector1[1] * vector2[1];
    const magnitude1 = Math.sqrt(Math.pow(vector1[0], 2) + Math.pow(vector1[1], 2));
    const magnitude2 = Math.sqrt(Math.pow(vector2[0], 2) + Math.pow(vector2[1], 2));
    const cosineTheta = dotProduct / (magnitude1 * magnitude2);
    const angleRad = Math.acos(Math.min(1, Math.max(-1, cosineTheta))); // clamp value to [-1, 1] to avoid errors
    return angleRad * (180 / Math.PI); // convert radians to degrees
}

/**
 * Calculates the length of the hypotenuse of a right triangle using the Pythagorean theorem.
 * @param {number} a - The length of one leg of the triangle.
 * @param {number} b - The length of the other leg of the triangle.
 * @returns {number} - The length of the hypotenuse.
 */
function pythagoreanTheorem(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

/**
 * Calculates the slope of a line given two points.
 * @param {number} x1 - The x-coordinate of the first point.
 * @param {number} y1 - The y-coordinate of the first point.
 * @param {number} x2 - The x-coordinate of the second point.
 * @param {number} y2 - The y-coordinate of the second point.
 * @returns {number} - The slope of the line.
 * @throws {Error} - If the line is vertical (x1 === x2).
 */
function slope(x1, y1, x2, y2) {
    if (x1 === x2) {
        throw new Error("Vertical line has an undefined slope.");
    }
    return (y2 - y1) / (x2 - x1);
}

/**
 * Calculates the midpoint of a line segment given two points.
 * @param {number} x1 - The x-coordinate of the first point.
 * @param {number} y1 - The y-coordinate of the first point.
 * @param {number} x2 - The x-coordinate of the second point.
 * @param {number} y2 - The y-coordinate of the second point.
 * @returns {Object} - An object with `x` and `y` coordinates of the midpoint.
 */
function midpoint(x1, y1, x2, y2) {
    return {
        x: (x1 + x2) / 2,
        y: (y1 + y2) / 2
    };
}

/**
 * Calculates the equation of a line in slope-intercept form (y = mx + b).
 * @param {number} x1 - The x-coordinate of the first point.
 * @param {number} y1 - The y-coordinate of the first point.
 * @param {number} x2 - The x-coordinate of the second point.
 * @param {number} y2 - The y-coordinate of the second point.
 * @returns {Object} - An object with `slope` and `yIntercept` of the line.
 * @throws {Error} - If the line is vertical (x1 === x2).
 */
function lineEquation(x1, y1, x2, y2) {
    const m = slope(x1, y1, x2, y2);
    const b = y1 - m * x1;
    return {
        slope: m,
        yIntercept: b
    };
}

module.exports = {
    areaRectangle,
    perimeterRectangle,
    areaCircle,
    circumferenceCircle,
    areaTriangle,
    volumeSphere,
    surfaceAreaSphere,
    distanceBetweenPoints,
    angleBetweenVectors,
    pythagoreanTheorem,
    slope,
    midpoint,
    lineEquation
};
