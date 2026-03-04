//arithmetic operators (+,-,*,/,%)
console.log(10+5) // addition
console.log(10-5) // subtraction
console.log(10*5) // multiplication
console.log(10/5) // division
console.log(10%3) // modulus (remainder)

//comparison operators (>,<,>=,<=,==,===,!=,!==)
console.log(10>5) // greater than
console.log(10<5) // less than
console.log(10>=5) // greater than or equal to
console.log(10<=5) // less than or equal to
console.log(10==5) // equality (loose)
console.log(10===5) // equality (strict)
console.log(10!=5) // inequality (loose)
console.log(10!==5) // inequality (strict)

//logical operators (&&, ||, !)
console.log(10>5 && 5<10) // logical AND
console.log(10>5 || 5>10) // logical OR
console.log(!(10>5)) // logical NOT

//assignment operators (=, +=, -=, *=, /=, %=)
let a=10
a+=5 // a = a + 5
console.log(a) // 15

//unary operators (++, --)
let b=10
b++ // b = b + 1
console.log(b) // 11

//ternary operator (condition ? expression1 : expression2)
let result = a>5 ? "greater than 5" : "less than or equal to 5"
console.log(result) // greater than 5
//a>20 && console.log("greater than 20") // short-circuit evaluation(only for true condition)