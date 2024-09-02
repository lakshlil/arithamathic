/**
 * Computes the factorial of a number.
 * @param {number} n - The number.
 * @returns {number} - The factorial of the number.
 */
function factorial(n) {
    if (n < 0) throw new Error('Negative numbers are not allowed.');
    return n === 0 ? 1 : n * factorial(n - 1);
}

/**
 * Computes the number of permutations of n items taken r at a time.
 * @param {number} n - The total number of items.
 * @param {number} r - The number of items to arrange.
 * @returns {number} - The number of permutations.
 */
function permutations(n, r) {
    return factorial(n) / factorial(n - r);
}

/**
 * Computes the number of combinations of n items taken r at a time.
 * @param {number} n - The total number of items.
 * @param {number} r - The number of items to choose.
 * @returns {number} - The number of combinations.
 */
function combinations(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

/**
 * Computes the value of a binomial coefficient (n choose k).
 * @param {number} n - The total number of items.
 * @param {number} k - The number of items to choose.
 * @returns {number} - The binomial coefficient.
 */
function binomialCoefficient(n, k) {
    return combinations(n, k);
}

/**
 * Applies the pigeonhole principle to determine if there is a guaranteed overlap.
 * @param {number} items - The number of items.
 * @param {number} containers - The number of containers.
 * @returns {boolean} - True if there is guaranteed overlap, false otherwise.
 */
function pigeonholePrinciple(items, containers) {
    return items > containers;
}

/**
 * Applies the inclusion-exclusion principle to find the size of the union of multiple sets.
 * @param {...Set} sets - The sets.
 * @returns {number} - The size of the union of the sets.
 */
function inclusionExclusion(...sets) {
    const n = sets.length;
    let unionSize = 0;
    for (let i = 1; i < (1 << n); i++) {
        let sign = -1;
        let subset = new Set();
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                sign *= -1;
                for (let elem of sets[j]) {
                    subset.add(elem);
                }
            }
        }
        unionSize += sign * subset.size;
    }
    return unionSize;
}

/**
 * Computes the nth Catalan number.
 * @param {number} n - The index of the Catalan number.
 * @returns {number} - The nth Catalan number.
 */
function catalanNumber(n) {
    return combinations(2 * n, n) / (n + 1);
}

/**
 * Computes the partition number of n, which is the number of ways to partition n into distinct parts.
 * @param {number} n - The number to partition.
 * @returns {number} - The number of partitions.
 */
function partitionNumber(n) {
    const partitions = Array(n + 1).fill(0);
    partitions[0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            partitions[j] += partitions[j - i];
        }
    }
    return partitions[n];
}

/**
 * Computes the generating function for a given sequence.
 * @param {number[]} sequence - The sequence of coefficients.
 * @param {number} x - The variable.
 * @returns {string} - The generating function as a string.
 */
function generatingFunction(sequence, x) {
    return sequence.map((coef, i) => coef * Math.pow(x, i)).reduce((acc, term) => acc + term, 0);
}

/**
 * Solves a recurrence relation using memoization.
 * @param {function} relation - The recurrence relation function.
 * @param {number} n - The number of terms to compute.
 * @returns {number[]} - The sequence of computed terms.
 */
function solveRecurrence(relation, n) {
    const results = [];
    const memo = {};
    for (let i = 0; i < n; i++) {
        results.push(relation(i, memo));
    }
    return results;
}

module.exports = {
    factorial,
    permutations,
    combinations,
    binomialCoefficient,
    pigeonholePrinciple,
    inclusionExclusion,
    catalanNumber,
    partitionNumber,
    generatingFunction,
    solveRecurrence
};
