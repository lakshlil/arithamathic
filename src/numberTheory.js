/**
 * Checks if a number is prime.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is prime, otherwise false.
 */
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

/**
 * Performs prime factorization of a number.
 * @param {number} num - The number to factorize.
 * @returns {number[]} - Array of prime factors.
 */
function primeFactorization(num) {
    const factors = [];
    while (num % 2 === 0) {
        factors.push(2);
        num /= 2;
    }
    for (let i = 3; i * i <= num; i += 2) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }
    if (num > 2) factors.push(num);
    return factors;
}

/**
 * Calculates the greatest common divisor (GCD) of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The GCD of the two numbers.
 */
function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

/**
 * Calculates the least common multiple (LCM) of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The LCM of the two numbers.
 */
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

/**
 * Performs modular arithmetic.
 * @param {number} a - The base.
 * @param {number} b - The modulus.
 * @returns {number} - The result of (a % b).
 */
function modularArithmetic(a, b) {
    return ((a % b) + b) % b;
}

/**
 * Calculates Euler's totient function for a number.
 * @param {number} n - The number.
 * @returns {number} - The value of Euler's totient function.
 */
function eulerTotient(n) {
    let result = n;
    for (let p = 2; p * p <= n; p++) {
        if (n % p === 0) {
            while (n % p === 0) n /= p;
            result -= result / p;
        }
    }
    if (n > 1) result -= result / n;
    return result;
}

/**
 * Applies Fermat's Little Theorem.
 * @param {number} a - The base.
 * @param {number} p - The prime.
 * @returns {boolean} - True if a^p ≡ a (mod p), otherwise false.
 */
function fermatLittleTheorem(a, p) {
    if (p <= 1 || !isPrime(p)) return false;
    return modularArithmetic(Math.pow(a, p), p) === modularArithmetic(a, p);
}

/**
 * Solves the Chinese Remainder Theorem for a system of congruences.
 * @param {number[]} a - Array of remainders.
 * @param {number[]} n - Array of moduli.
 * @returns {number} - The solution to the system of congruences.
 */
function chineseRemainder(a, n) {
    const prod = n.reduce((acc, val) => acc * val, 1);
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        const p = prod / n[i];
        sum += a[i] * modInverse(p, n[i]) * p;
    }
    return modularArithmetic(sum, prod);
}

/**
 * Finds the modular multiplicative inverse.
 * @param {number} a - The number.
 * @param {number} m - The modulus.
 * @returns {number} - The modular multiplicative inverse.
 */
function modInverse(a, m) {
    let [m0, x0, x1] = [m, 0, 1];
    if (m === 1) return 0;
    while (a > 1) {
        const q = Math.floor(a / m);
        [m, a] = [a % m, m];
        [x0, x1] = [x1 - q * x0, x0];
    }
    if (x1 < 0) x1 += m0;
    return x1;
}

/**
 * Checks if a number is perfect.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is perfect, otherwise false.
 */
function isPerfectNumber(num) {
    const sum = Array.from({ length: num / 2 }, (_, i) => i + 1)
                     .filter(i => num % i === 0)
                     .reduce((acc, val) => acc + val, 0);
    return sum === num;
}

/**
 * Generates the Fibonacci sequence up to n terms.
 * @param {number} n - The number of terms.
 * @returns {number[]} - Array containing the Fibonacci sequence.
 */
function fibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

/**
 * Calculates the factorial of a number.
 * @param {number} num - The number.
 * @returns {number} - The factorial of the number.
 */
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

/**
 * Applies divisibility rules for numbers.
 * @param {number} num - The number to check.
 * @param {number} divisor - The divisor.
 * @returns {boolean} - True if num is divisible by divisor, otherwise false.
 */
function isDivisible(num, divisor) {
    return num % divisor === 0;
}

/**
 * Identifies patterns in a sequence. Work in progress
 * @param {number[]} sequence - The sequence of numbers.
 * @returns {string} - Description of the pattern if detected.
 */
function identifyPattern(sequence) {
    if (sequence.length < 2) return 'Insufficient data';
    const differences = sequence.slice(1).map((val, i) => val - sequence[i]);
    const isArithmetic = differences.every(diff => diff === differences[0]);
    if (isArithmetic) return 'Arithmetic sequence';
    
    const ratios = sequence.slice(1).map((val, i) => val / sequence[i]);
    const isGeometric = ratios.every(ratio => ratio === ratios[0]);
    if (isGeometric) return 'Geometric sequence';
    
    return 'No recognizable pattern';
}

/**
 * Generates random numbers within a specified range.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - A random number between min and max.
 */
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Identifies square numbers.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is a square number, otherwise false.
 */
function isSquareNumber(num) {
    return Number.isInteger(Math.sqrt(num));
}

/**
 * Identifies cube numbers.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is a cube number, otherwise false.
 */
function isCubeNumber(num) {
    return Number.isInteger(Math.cbrt(num));
}

/**
 * Generates triangular numbers up to n terms.
 * @param {number} n - The number of terms.
 * @returns {number[]} - Array containing the triangular numbers.
 */
function triangularNumbers(n) {
    const numbers = [];
    for (let i = 1; i <= n; i++) {
        numbers.push((i * (i + 1)) / 2);
    }
    return numbers;
}

/**
 * Identifies palindromic numbers.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is a palindromic number, otherwise false.
 */
function isPalindromicNumber(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

/**
 * Generates Catalan numbers up to n terms.
 * @param {number} n - The number of terms.
 * @returns {number[]} - Array containing the Catalan numbers.
 */
function catalanNumbers(n) {
    const numbers = [];
    for (let i = 0; i < n; i++) {
        numbers.push(binomialCoefficient(2 * i, i) / (i + 1));
    }
    return numbers;
}

/**
 * Calculates binomial coefficient.
 * @param {number} n - The number of trials.
 * @param {number} k - The number of successes.
 * @returns {number} - The binomial coefficient.
 */
function binomialCoefficient(n, k) {
    if (k > n) return 0;
    if (k === 0 || k === n) return 1;
    let res = 1;
    for (let i = 0; i < k; i++) {
        res = res * (n - i) / (i + 1);
    }
    return res;
}

/**
 * Identifies Mersenne primes.
 * @param {number} p - The exponent.
 * @returns {boolean} - True if 2^p - 1 is a Mersenne prime, otherwise false.
 */
function isMersennePrime(p) {
    if (!isPrime(p)) return false;
    const num = Math.pow(2, p) - 1;
    return isPrime(num);
}

module.exports = {
    isPrime,
    primeFactorization,
    gcd,
    lcm,
    modularArithmetic,
    eulerTotient,
    fermatLittleTheorem,
    chineseRemainder,
    modInverse,
    isPerfectNumber,
    fibonacciSequence,
    factorial,
    isDivisible,
    identifyPattern,
    generateRandomNumber,
    isSquareNumber,
    isCubeNumber,
    triangularNumbers,
    isPalindromicNumber,
    catalanNumbers,
    binomialCoefficient,
    isMersennePrime
};
