/**
 * Computes the union of two sets.
 * @param {Set} setA - The first set.
 * @param {Set} setB - The second set.
 * @returns {Set} - A new set containing elements present in either setA or setB.
 */
function union(setA, setB) {
    return new Set([...setA, ...setB]);
}

/**
 * Computes the intersection of two sets.
 * @param {Set} setA - The first set.
 * @param {Set} setB - The second set.
 * @returns {Set} - A new set containing elements present in both setA and setB.
 */
function intersection(setA, setB) {
    return new Set([...setA].filter(x => setB.has(x)));
}

/**
 * Computes the difference between two sets.
 * @param {Set} setA - The first set.
 * @param {Set} setB - The second set.
 * @returns {Set} - A new set containing elements present in setA but not in setB.
 */
function difference(setA, setB) {
    return new Set([...setA].filter(x => !setB.has(x)));
}

/**
 * Computes the Cartesian product of two sets.
 * @param {Set} setA - The first set.
 * @param {Set} setB - The second set.
 * @returns {Set} - A new set containing pairs (tuples) of elements from setA and setB.
 */
function cartesianProduct(setA, setB) {
    const product = new Set();
    for (let a of setA) {
        for (let b of setB) {
            product.add([a, b]);
        }
    }
    return product;
}

/**
 * Generates the power set of a given set.
 * @param {Set} set - The original set.
 * @returns {Set} - A new set containing all subsets of the original set.
 */
function powerSet(set) {
    const result = new Set([new Set()]);
    for (let elem of set) {
        const newSets = [];
        for (let subset of result) {
            newSets.push(new Set([...subset, elem]));
        }
        for (let newSet of newSets) {
            result.add(newSet);
        }
    }
    return result;
}

/**
 * Computes the cardinality (number of elements) of a set.
 * @param {Set} set - The set.
 * @returns {number} - The cardinality of the set.
 */
function cardinality(set) {
    return set.size;
}

/**
 * Computes the complement of a set relative to a universal set.
 * @param {Set} set - The original set.
 * @param {Set} universalSet - The universal set.
 * @returns {Set} - A new set containing elements in the universal set but not in the original set.
 */
function complement(set, universalSet) {
    return difference(universalSet, set);
}

/**
 * Computes the De Morgan's laws for two sets.
 * @param {Set} setA - The first set.
 * @param {Set} setB - The second set.
 * @param {Set} universalSet - The universal set.
 * @returns {object} - An object containing the results of De Morgan's laws:
 *   - `notUnion`: The complement of the union of setA and setB.
 *   - `notIntersection`: The complement of the intersection of setA and setB.
 */
function deMorgansLaws(setA, setB, universalSet) {
    return {
        notUnion: complement(union(setA, setB), universalSet),
        notIntersection: complement(intersection(setA, setB), universalSet),
    };
}

module.exports = {
    union,
    intersection,
    difference,
    cartesianProduct,
    powerSet,
    cardinality,
    complement,
    deMorgansLaws
};
