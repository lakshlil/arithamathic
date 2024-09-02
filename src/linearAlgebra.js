/**
 * Adds two vectors.
 * @param {number[]} v1 - The first vector.
 * @param {number[]} v2 - The second vector.
 * @returns {number[]} - The resulting vector after addition.
 */
function addVectors(v1, v2) {
    if (v1.length !== v2.length) throw new Error('Vectors must be of the same length.');
    return v1.map((val, i) => val + v2[i]);
}

/**
 * Subtracts one vector from another.
 * @param {number[]} v1 - The vector to subtract from.
 * @param {number[]} v2 - The vector to subtract.
 * @returns {number[]} - The resulting vector after subtraction.
 */
function subtractVectors(v1, v2) {
    if (v1.length !== v2.length) throw new Error('Vectors must be of the same length.');
    return v1.map((val, i) => val - v2[i]);
}

/**
 * Calculates the dot product of two vectors.
 * @param {number[]} v1 - The first vector.
 * @param {number[]} v2 - The second vector.
 * @returns {number} - The dot product of the vectors.
 */
function dotProduct(v1, v2) {
    if (v1.length !== v2.length) throw new Error('Vectors must be of the same length.');
    return v1.reduce((sum, val, i) => sum + val * v2[i], 0);
}

/**
 * Calculates the cross product of two 3D vectors.
 * @param {number[]} v1 - The first 3D vector.
 * @param {number[]} v2 - The second 3D vector.
 * @returns {number[]} - The resulting vector after cross product.
 */
function crossProduct(v1, v2) {
    if (v1.length !== 3 || v2.length !== 3) throw new Error('Both vectors must be 3D.');
    return [
        v1[1] * v2[2] - v1[2] * v2[1],
        v1[2] * v2[0] - v1[0] * v2[2],
        v1[0] * v2[1] - v1[1] * v2[0]
    ];
}

/**
 * Adds two matrices.
 * @param {number[][]} m1 - The first matrix.
 * @param {number[][]} m2 - The second matrix.
 * @returns {number[][]} - The resulting matrix after addition.
 */
function addMatrices(m1, m2) {
    if (m1.length !== m2.length || m1[0].length !== m2[0].length) throw new Error('Matrices must have the same dimensions.');
    return m1.map((row, i) => row.map((val, j) => val + m2[i][j]));
}

/**
 * Multiplies two matrices.
 * @param {number[][]} m1 - The first matrix.
 * @param {number[][]} m2 - The second matrix.
 * @returns {number[][]} - The resulting matrix after multiplication.
 */
function multiplyMatrices(m1, m2) {
    if (m1[0].length !== m2.length) throw new Error('Number of columns in the first matrix must be equal to the number of rows in the second matrix.');
    return m1.map(row => 
        m2[0].map((_, j) => 
            row.reduce((sum, val, k) => sum + val * m2[k][j], 0)
        )
    );
}

/**
 * Calculates the determinant of a 2x2 matrix.
 * @param {number[][]} matrix - The 2x2 matrix.
 * @returns {number} - The determinant of the matrix.
 */
function determinant2x2(matrix) {
    if (matrix.length !== 2 || matrix[0].length !== 2) throw new Error('Matrix must be 2x2.');
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

/**
 * Calculates the determinant of a 3x3 matrix.
 * @param {number[][]} matrix - The 3x3 matrix.
 * @returns {number} - The determinant of the matrix.
 */
function determinant3x3(matrix) {
    if (matrix.length !== 3 || matrix[0].length !== 3) throw new Error('Matrix must be 3x3.');
    return matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) -
           matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
           matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]);
}

/**
 * Calculates the inverse of a 2x2 matrix.
 * @param {number[][]} matrix - The 2x2 matrix.
 * @returns {number[][]} - The inverse of the matrix.
 */
function inverse2x2(matrix) {
    const det = determinant2x2(matrix);
    if (det === 0) throw new Error('Matrix is singular and cannot be inverted.');
    return [
        [matrix[1][1] / det, -matrix[0][1] / det],
        [-matrix[1][0] / det, matrix[0][0] / det]
    ];
}

/**
 * Calculates the inverse of a 3x3 matrix using the adjugate method.
 * @param {number[][]} matrix - The 3x3 matrix.
 * @returns {number[][]} - The inverse of the matrix.
 */
function inverse3x3(matrix) {
    const det = determinant3x3(matrix);
    if (det === 0) throw new Error('Matrix is singular and cannot be inverted.');
    const adjugate = [
        [determinant2x2([[matrix[1][1], matrix[1][2]], [matrix[2][1], matrix[2][2]]]),
         -determinant2x2([[matrix[1][0], matrix[1][2]], [matrix[2][0], matrix[2][2]]]),
         determinant2x2([[matrix[1][0], matrix[1][1]], [matrix[2][0], matrix[2][1]]])],
        [-determinant2x2([[matrix[0][1], matrix[0][2]], [matrix[2][1], matrix[2][2]]]),
         determinant2x2([[matrix[0][0], matrix[0][2]], [matrix[2][0], matrix[2][2]]]),
         -determinant2x2([[matrix[0][0], matrix[0][1]], [matrix[2][0], matrix[2][1]]])],
        [determinant2x2([[matrix[0][1], matrix[0][2]], [matrix[1][1], matrix[1][2]]]),
         -determinant2x2([[matrix[0][0], matrix[0][2]], [matrix[1][0], matrix[1][2]]]),
         determinant2x2([[matrix[0][0], matrix[0][1]], [matrix[1][0], matrix[1][1]]])]
    ];
    return adjugate.map(row => row.map(val => val / det));
}

/**
 * Calculates the eigenvalues of a 2x2 matrix.
 * @param {number[][]} matrix - The 2x2 matrix.
 * @returns {number[]} - The eigenvalues of the matrix.
 */
function eigenvalues2x2(matrix) {
    const a = 1;
    const b = -(matrix[0][0] + matrix[1][1]);
    const c = determinant2x2(matrix);
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) throw new Error('Eigenvalues are complex.');
    return [
        (-b + Math.sqrt(discriminant)) / (2 * a),
        (-b - Math.sqrt(discriminant)) / (2 * a)
    ];
}

/**
 * Solves a system of linear equations using matrix inversion.
 * @param {number[][]} A - Coefficient matrix.
 * @param {number[]} b - Constants vector.
 * @returns {number[]} - Solution vector.
 */
function solveLinearSystem(A, b) {
    const inverseA = inverse3x3(A);
    return multiplyMatrices(inverseA, [b]).flat();
}

/**
 * Calculates the rank of a matrix.
 * @param {number[][]} matrix - The matrix.
 * @returns {number} - The rank of the matrix.
 */
function rankOfMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const augmentedMatrix = matrix.map(row => [...row, ...Array(cols).fill(0)]);
    const n = Math.min(rows, cols);
    let rank = 0;
    
    for (let i = 0; i < n; i++) {
        let pivot = augmentedMatrix[i][i];
        if (pivot === 0) {
            for (let k = i + 1; k < rows; k++) {
                if (augmentedMatrix[k][i] !== 0) {
                    [augmentedMatrix[i], augmentedMatrix[k]] = [augmentedMatrix[k], augmentedMatrix[i]];
                    pivot = augmentedMatrix[i][i];
                    break;
                }
            }
        }
        if (pivot === 0) continue;
        rank++;
        for (let j = 0; j < rows; j++) {
            if (j !== i) {
                const factor = augmentedMatrix[j][i] / pivot;
                for (let k = i; k < cols; k++) {
                    augmentedMatrix[j][k] -= factor * augmentedMatrix[i][k];
                }
            }
        }
    }
    return rank;
}

/**
 * Transposes a matrix.
 * @param {number[][]} matrix - The matrix.
 * @returns {number[][]} - The transposed matrix.
 */
function transposeMatrix(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

/**
 * Diagonalizes a matrix if possible.
 * @param {number[][]} matrix - The matrix.
 * @returns {number[][]} - The diagonal matrix.
 */
function diagonalizeMatrix(matrix) {
    // Placeholder for actual diagonalization logic.
    throw new Error('Matrix diagonalization not implemented.');
}

/**
 * Performs the Gram-Schmidt orthogonalization process.
 * @param {number[][]} vectors - The matrix containing vectors as rows.
 * @returns {number[][]} - The orthogonalized vectors.
 */
function gramSchmidt(vectors) {
    const orthogonalized = [];
    for (let i = 0; i < vectors.length; i++) {
        let v = vectors[i];
        for (let j = 0; j < i; j++) {
            const proj = dotProduct(orthogonalized[j], v) / dotProduct(orthogonalized[j], orthogonalized[j]);
            v = subtractVectors(v, orthogonalized[j].map(val => val * proj));
        }
        orthogonalized.push(v);
    }
    return orthogonalized;
}

module.exports = {
    addVectors,
    subtractVectors,
    dotProduct,
    crossProduct,
    addMatrices,
    multiplyMatrices,
    determinant2x2,
    determinant3x3,
    inverse2x2,
    inverse3x3,
    eigenvalues2x2,
    solveLinearSystem,
    rankOfMatrix,
    transposeMatrix,
    diagonalizeMatrix,
    gramSchmidt
};
