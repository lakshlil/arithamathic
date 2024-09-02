/**
 * Calculates the mean of a dataset.
 * @param {number[]} data - The dataset.
 * @returns {number} - The mean of the dataset.
 */
function mean(data) {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
}

/**
 * Calculates the median of a dataset.
 * @param {number[]} data - The dataset.
 * @returns {number} - The median of the dataset.
 */
function median(data) {
    data.sort((a, b) => a - b);
    const mid = Math.floor(data.length / 2);
    if (data.length % 2 === 0) {
        return (data[mid - 1] + data[mid]) / 2;
    } else {
        return data[mid];
    }
}

/**
 * Calculates the mode of a dataset.
 * @param {number[]} data - The dataset.
 * @returns {number[]} - The mode(s) of the dataset.
 */
function mode(data) {
    const frequency = {};
    data.forEach(val => frequency[val] = (frequency[val] || 0) + 1);
    const maxFreq = Math.max(...Object.values(frequency));
    return Object.keys(frequency).filter(key => frequency[key] === maxFreq).map(Number);
}

/**
 * Calculates the variance of a dataset.
 * @param {number[]} data - The dataset.
 * @returns {number} - The variance of the dataset.
 */
function variance(data) {
    const dataMean = mean(data);
    return data.reduce((acc, val) => acc + Math.pow(val - dataMean, 2), 0) / data.length;
}

/**
 * Calculates the standard deviation of a dataset.
 * @param {number[]} data - The dataset.
 * @returns {number} - The standard deviation of the dataset.
 */
function standardDeviation(data) {
    return Math.sqrt(variance(data));
}

/**
 * Calculates the probability of an event.
 * @param {number} favorable - Number of favorable outcomes.
 * @param {number} total - Total number of outcomes.
 * @returns {number} - The probability of the event.
 */
function probability(favorable, total) {
    return favorable / total;
}

/**
 * Calculates the number of combinations (n choose k).
 * @param {number} n - The total number of items.
 * @param {number} k - The number of items to choose.
 * @returns {number} - The number of combinations.
 */
function combinations(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}

/**
 * Calculates the number of permutations (nPk).
 * @param {number} n - The total number of items.
 * @param {number} k - The number of items to arrange.
 * @returns {number} - The number of permutations.
 */
function permutations(n, k) {
    return factorial(n) / factorial(n - k);
}

/**
 * Calculates the factorial of a number.
 * @param {number} n - The number.
 * @returns {number} - The factorial of the number.
 */
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

/**
 * Calculates the probability density function of the normal distribution.
 * @param {number} x - The value.
 * @param {number} mean - The mean of the distribution.
 * @param {number} stdDev - The standard deviation of the distribution.
 * @returns {number} - The probability density.
 */
function normalDistribution(x, mean, stdDev) {
    const exponent = Math.exp(-Math.pow(x - mean, 2) / (2 * Math.pow(stdDev, 2)));
    return (1 / (stdDev * Math.sqrt(2 * Math.PI))) * exponent;
}

/**
 * Calculates the probability of a binomial distribution.
 * @param {number} x - The number of successes.
 * @param {number} n - The number of trials.
 * @param {number} p - The probability of success on an individual trial.
 * @returns {number} - The probability of x successes.
 */
function binomialDistribution(x, n, p) {
    return combinations(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x);
}

/**
 * Calculates the probability of a Poisson distribution.
 * @param {number} k - The number of occurrences.
 * @param {number} lambda - The average rate of occurrences.
 * @returns {number} - The probability of k occurrences.
 */
function poissonDistribution(k, lambda) {
    return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
}

/**
 * Performs a t-test to compare means.
 * @param {number[]} sample1 - The first sample dataset.
 * @param {number[]} sample2 - The second sample dataset.
 * @returns {number} - The t-statistic value.
 */
function tTest(sample1, sample2) {
    const mean1 = mean(sample1);
    const mean2 = mean(sample2);
    const var1 = variance(sample1);
    const var2 = variance(sample2);
    const n1 = sample1.length;
    const n2 = sample2.length;
    const t = (mean1 - mean2) / Math.sqrt((var1 / n1) + (var2 / n2));
    return t;
}

/**
 * Performs a chi-square test.
 * @param {number[]} observed - The observed frequencies.
 * @param {number[]} expected - The expected frequencies.
 * @returns {number} - The chi-square statistic.
 */
function chiSquareTest(observed, expected) {
    return observed.reduce((sum, o, i) => sum + Math.pow(o - expected[i], 2) / expected[i], 0);
}

/**
 * Calculates the correlation coefficient between two datasets.
 * @param {number[]} x - The first dataset.
 * @param {number[]} y - The second dataset.
 * @returns {number} - The correlation coefficient.
 */
function correlationCoefficient(x, y) {
    const meanX = mean(x);
    const meanY = mean(y);
    const numerator = x.reduce((sum, xi, i) => sum + (xi - meanX) * (y[i] - meanY), 0);
    const denominator = Math.sqrt(x.reduce((sum, xi) => sum + Math.pow(xi - meanX, 2), 0) *
                                  y.reduce((sum, yi) => sum + Math.pow(yi - meanY, 2), 0));
    return numerator / denominator;
}

/**
 * Calculates the regression line for two datasets.
 * @param {number[]} x - The x dataset.
 * @param {number[]} y - The y dataset.
 * @returns {object} - An object containing the slope and intercept of the regression line.
 */
function linearRegression(x, y) {
    const n = x.length;
    const xMean = mean(x);
    const yMean = mean(y);
    const numerator = x.reduce((sum, xi, i) => sum + (xi - xMean) * (y[i] - yMean), 0);
    const denominator = x.reduce((sum, xi) => sum + Math.pow(xi - xMean, 2), 0);
    const slope = numerator / denominator;
    const intercept = yMean - slope * xMean;
    return { slope, intercept };
}

/**
 * Calculates the Z-score for a value in a dataset.
 * @param {number} value - The value to standardize.
 * @param {number[]} data - The dataset.
 * @returns {number} - The Z-score.
 */
function zScore(value, data) {
    const dataMean = mean(data);
    const dataStdDev = standardDeviation(data);
    return (value - dataMean) / dataStdDev;
}

/**
 * Calculates the confidence interval for a sample mean.
 * @param {number} mean - The sample mean.
 * @param {number} stdDev - The sample standard deviation.
 * @param {number} n - The sample size.
 * @param {number} z - The Z-value for the confidence level.
 * @returns {object} - An object containing the lower and upper bounds of the confidence interval.
 */
function confidenceInterval(mean, stdDev, n, z) {
    const marginOfError = z * (stdDev / Math.sqrt(n));
    return {
        lower: mean - marginOfError,
        upper: mean + marginOfError
    };
}

/**
 * Performs ANOVA (Analysis of Variance).
 * @param {number[][]} groups - An array of datasets (groups).
 * @returns {object} - An object containing the F-statistic and p-value.
 */
function anova(groups) {
    const overallMean = mean(groups.flat());
    const ssBetween = groups.reduce((sum, group) => sum + group.length * Math.pow(mean(group) - overallMean, 2), 0);
    const ssWithin = groups.reduce((sum, group) => sum + group.reduce((s, value) => s + Math.pow(value - mean(group), 2), 0), 0);
    const dfBetween = groups.length - 1;
    const dfWithin = groups.flat().length - groups.length;
    const msBetween = ssBetween / dfBetween;
    const msWithin = ssWithin / dfWithin;
    const fStat = msBetween / msWithin;
    // Note: To find the p-value, you would need to use an F-distribution table or a statistical library.
    return { fStat, pValue: "p-value calculation not included" }; // Placeholder for p-value
}

module.exports = {
    mean,
    median,
    mode,
    variance,
    standardDeviation,
    probability,
    combinations,
    permutations,
    normalDistribution,
    binomialDistribution,
    poissonDistribution,
    tTest,
    chiSquareTest,
    correlationCoefficient,
    linearRegression,
    zScore,
    confidenceInterval,
    anova
};
