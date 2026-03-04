// let employees = ["John Doe", "Jane Smith", "Bob Johnson"];
// employees=[...employees, "brian"] // using spread operator to add a new employee to the array
// console.log(employees)

// let employees = ["John Doe", "Jane Smith", "Bob Johnson"];
// employees.push("brian"); // using push method to add a new employee to the array
// console.log(employees)

let employees =new Array ("John Doe", "Jane Smith", "Bob Johnson");
employees=[...employees, "brian"] // using spread operator to add a new employee to the array
console.log(employees)
console.log(employees.length) // returns the number of elements in the employees array
console.log(employees[0]) // accessing the first element of the employees array
// for(let i=0; i<employees.length; i++) {
//     console.log(employees[i]) // iterating through the employees array using a for loop
// }
for(let employee of employees) {
    console.log(employee) // iterating through the employees array using a for...of loop
}