const arimathic = require('./src/index');

// Test arithmetic operations
console.log('Addition:', arimathic.arithmetic.add(5, 3));        // 8
console.log('Subtraction:', arimathic.arithmetic.subtract(5, 3)); // 2
console.log('Multiplication:', arimathic.arithmetic.multiply(5, 3)); // 15
console.log('Division:', arimathic.arithmetic.divide(10, 2)); // 5
console.log('Modulus:', arimathic.arithmetic.remainder(10, 3)); // 1
console.log('Exponentiation:', arimathic.arithmetic.exponentiate(2, 3)); // 8
console.log('Floor Division:', arimathic.arithmetic.floorDivide(10, 3)); // 3
