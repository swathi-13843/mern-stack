// import { add, subtract } from './calc.js'

// const result1 = add(5, 3)
// console.log(result1)// Output: 8
// const result2 = subtract(5, 3)
// console.log(result2) // Output: 2

// import add from './calc.js'

// const result1 = add(5, 3)
// console.log(result1) // Output: 8

import add, { subtract } from './calc.js'

const result1 = add(5, 3)
console.log(result1) // Output: 8
const result2 = subtract(5, 3)
console.log(result2) // Output: 2