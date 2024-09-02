// index.js

const arithmetic = require('./src/arithmetic');
const algebra = require('./src/algebra');
const geometry = require('./src/geometry');
const calculus = require('./src/calculus');
const trigonometry = require('./src/trigonometry');
const statistics = require('./src/statistics');
const numberTheory = require('./src/numberTheory');
const linearAlgebra = require('./src/linearAlgebra');
const setTheory = require('./src/setTheory');
const combinatorics = require('./src/combinatorics');
const graphTheory = require('./src/graphTheory');
const booleanAlgebra = require('./src/booleanAlgebra');
const miscellaneous = require('./src/miscellaneous');

module.exports = {
    // Arithmetic Operations
    ...arithmetic,

    // Algebra
    ...algebra,

    // Geometry
    ...geometry,

    // Calculus
    ...calculus,

    // Trigonometry
    ...trigonometry,

    // Statistics
    ...statistics,

    // Number Theory
    ...numberTheory,

    // Linear Algebra
    ...linearAlgebra,

    // Set Theory
    ...setTheory,

    // Combinatorics
    ...combinatorics,

    // Graph Theory
    ...graphTheory,

    // Boolean Algebra
    ...booleanAlgebra,

    // Miscellaneous
    ...miscellaneous
};
