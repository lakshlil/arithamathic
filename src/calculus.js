/**
 * Calculates the first derivative of a function using finite differences.
 * @param {Function} func - The function to differentiate.
 * @param {number} x - The point at which to evaluate the derivative.
 * @param {number} [h=1e-5] - The step size for finite differences (default is 1e-5).
 * @returns {number} - The value of the derivative at the given point.
 */
function derivative(func, x, h = 1e-5) {
    return (func(x + h) - func(x)) / h;
}

/**
 * Calculates the definite integral of a function using numerical integration (trapezoidal rule).
 * @param {Function} func - The function to integrate.
 * @param {number} a - The lower limit of integration.
 * @param {number} b - The upper limit of integration.
 * @param {number} [n=1000] - The number of intervals for numerical integration (default is 1000).
 * @returns {number} - The value of the definite integral between the two limits.
 */
function integralDefinite(func, a, b, n = 1000) {
    const h = (b - a) / n;
    let sum = 0.5 * (func(a) + func(b));
    for (let i = 1; i < n; i++) {
        sum += func(a + i * h);
    }
    return sum * h;
}

/**
 * Calculates the indefinite integral of a function using numerical integration.
 * @param {Function} func - The function to integrate.
 * @param {number} a - The lower limit of integration.
 * @param {number} b - The upper limit of integration.
 * @param {number} [n=1000] - The number of intervals for numerical integration (default is 1000).
 * @returns {Function} - A function representing the indefinite integral of the given function.
 */
function integralIndefinite(func, a, b, n = 1000) {
    return function(x) {
        return integralDefinite(func, a, x, n);
    };
}

/**
 * Calculates the limit of a function as x approaches a given value using numerical approximation.
 * @param {Function} func - The function to evaluate.
 * @param {number} point - The point at which to evaluate the limit.
 * @param {number} [epsilon=1e-5] - A small number to approximate the limit (default is 1e-5).
 * @returns {number} - The limit of the function as x approaches the given point.
 */
function limit(func, point, epsilon = 1e-5) {
    return (func(point + epsilon) - func(point - epsilon)) / (2 * epsilon);
}

/**
 * Calculates the Taylor series expansion of a function around a point.
 * @param {Function} func - The function to expand.
 * @param {number} a - The point around which to expand.
 * @param {number} [n=5] - The number of terms in the series (default is 5).
 * @returns {Function} - A function representing the Taylor series expansion of the given function.
 */
function taylorSeries(func, a, n = 5) {
    return function(x) {
        let sum = 0;
        for (let k = 0; k < n; k++) {
            const derivativeFunc = (h) => derivative(func, a, h);
            const term = derivativeFunc(a) * Math.pow(x - a, k) / factorial(k);
            sum += term;
        }
        return sum;
    };
}

/**
 * Calculates the factorial of a number.
 * @param {number} n - The number to calculate the factorial of.
 * @returns {number} - The factorial of the given number.
 */
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

/**
 * Solves a differential equation using numerical methods (Euler's method).
 * @param {Function} func - The differential equation in the form dy/dx = func(x, y).
 * @param {number} y0 - The initial value of y.
 * @param {number} x0 - The initial value of x.
 * @param {number} xn - The point at which to evaluate the solution.
 * @param {number} [h=0.01] - The step size for numerical approximation (default is 0.01).
 * @returns {number} - The value of y at x = xn.
 */
function differentialEquation(func, y0, x0, xn, h = 0.01) {
    let y = y0;
    for (let x = x0; x < xn; x += h) {
        y += func(x, y) * h;
    }
    return y;
}

/**
 * Calculates the partial derivative of a function with respect to one variable.
 * @param {Function} func - The function to differentiate.
 * @param {number} x - The point at which to evaluate the partial derivative.
 * @param {number} y - The value of the other variable (if the function has more than one variable).
 * @param {number} [h=1e-5] - The step size for finite differences (default is 1e-5).
 * @returns {number} - The value of the partial derivative.
 */
function partialDerivative(func, x, y, h = 1e-5) {
    return (func(x + h, y) - func(x, y)) / h;
}

/**
 * Calculates the gradient of a function (a vector of partial derivatives).
 * @param {Function} func - The function to evaluate (must be a function of multiple variables).
 * @param {number} x - The x-coordinate of the point.
 * @param {number} y - The y-coordinate of the point.
 * @param {number} [h=1e-5] - The step size for finite differences (default is 1e-5).
 * @returns {number[]} - The gradient of the function at the given point.
 */
function gradient(func, x, y, h = 1e-5) {
    return [
        partialDerivative(func, x, y, h),
        partialDerivative((x, y) => func(x, y + h), x, y, h)
    ];
}

/**
 * Calculates the divergence of a vector field.
 * @param {Function} F - The vector field (should return an array of two functions).
 * @param {number} x - The x-coordinate of the point.
 * @param {number} y - The y-coordinate of the point.
 * @param {number} [h=1e-5] - The step size for finite differences (default is 1e-5).
 * @returns {number} - The divergence of the vector field at the given point.
 */
function divergence(F, x, y, h = 1e-5) {
    const [F1, F2] = F(x, y);
    return partialDerivative(F1, x, y, h) + partialDerivative(F2, x, y, h);
}

/**
 * Calculates the curl of a vector field.
 * @param {Function} F - The vector field (should return an array of two functions).
 * @param {number} x - The x-coordinate of the point.
 * @param {number} y - The y-coordinate of the point.
 * @param {number} [h=1e-5] - The step size for finite differences (default is 1e-5).
 * @returns {number} - The curl of the vector field at the given point.
 */
function curl(F, x, y, h = 1e-5) {
    const [F1, F2] = F(x, y);
    return partialDerivative(F2, x, y, h) - partialDerivative(F1, x, y, h);
}

/**
 * Applies L'Hopital's rule to evaluate limits of indeterminate forms.
 * @param {Function} func - The function to evaluate.
 * @param {number} x - The point at which to apply L'Hopital's rule.
 * @param {number} [epsilon=1e-5] - A small number to approximate the limit (default is 1e-5).
 * @returns {number} - The result of applying L'Hopital's rule.
 */
function lHopitalRule(func, x, epsilon = 1e-5) {
    const numerator = func(x + epsilon) - func(x - epsilon);
    const denominator = 2 * epsilon;
    return numerator / denominator;
}

/**
 * Applies the chain rule to differentiate composite functions.
 * @param {Function} outerFunc - The outer function.
 * @param {Function} innerFunc - The inner function.
 * @param {number} x - The point at which to evaluate the derivative.
 * @param {number} [h=1e-5] - The step size for finite differences (default is 1e-5).
 * @returns {number} - The value of the derivative of the composite function.
 */
function chainRule(outerFunc, innerFunc, x, h = 1e-5) {
    const outerDerivative = derivative(outerFunc, innerFunc(x), h);
    const innerDerivative = derivative(innerFunc, x, h);
    return outerDerivative * innerDerivative;
}

/**
 * Calculates the integral of a function by parts.
 * @param {Function} u - The first function.
 * @param {Function} v - The second function.
 * @param {number} a - The lower limit of integration.
 * @param {number} b - The upper limit of integration.
 * @param {number} [n=1000] - The number of intervals for numerical integration (default is 1000).
 * @returns {number} - The result of the integration by parts.
 */
function integrationByParts(u, v, a, b, n = 1000) {
    const du = derivative(u, a);
    const dv = derivative(v, a);
    const uv = integralDefinite((x) => u(x) * dv(x), a, b, n);
    const vdu = integralDefinite((x) => v(x) * du(x), a, b, n);
    return uv - vdu;
}

/**
 * Calculates multiple integrals for functions of two variables.
 * @param {Function} func - The function to integrate (must be a function of two variables).
 * @param {number} a - The lower limit for x.
 * @param {number} b - The upper limit for x.
 * @param {number} c - The lower limit for y.
 * @param {number} d - The upper limit for y.
 * @param {number} [n=1000] - The number of intervals for numerical integration (default is 1000).
 * @returns {number} - The result of the multiple integral.
 */
function multipleIntegrals(func, a, b, c, d, n = 1000) {
    const h = (b - a) / n;
    const k = (d - c) / n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const x = a + i * h;
            const y = c + j * k;
            sum += func(x, y) * h * k;
        }
    }
    return sum;
}

module.exports = {
    derivative,
    integralDefinite,
    integralIndefinite,
    limit,
    taylorSeries,
    factorial,
    differentialEquation,
    partialDerivative,
    gradient,
    divergence,
    curl,
    lHopitalRule,
    chainRule,
    integrationByParts,
    multipleIntegrals
};
