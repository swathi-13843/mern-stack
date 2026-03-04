//forEach () - is a method used to iterate over an array and execute a provided function once for each element in the array.
//used for looping the number array and performing some operation on each element of the array.

// const numbers = [25,21,27,20];
// //numbers.forEach() => {}
// numbers.forEach((number) => {
//     console.log(number)
// })

//map() - is a method used to create a new array by calling a provided function on every element in the calling array.
const numbers = [25,21,27,20];
const newArray = numbers.map((number) => number + 3);
console.log(newArray) // [28, 24, 30, 23]

//filter() - is a method used to create a new array with all elements that pass the test implemented by the provided function.
const numbers1 = [25,21,27,20];
const filteredArray = numbers1.filter((number) => number > 22);
console.log(filteredArray) // [25, 27]

//find() - is a method used to return the value of the first element in the array that satisfies the provided testing function.
const numbers2 = [25,21,27,20];
const foundNumber = numbers2.find((number) => number > 22);
console.log(foundNumber) // 25