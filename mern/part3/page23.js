const employee = {
    name: "John Doe",
    city : "hyderabad",
    state : "Telangana",
    country : "India"
}
for(let key in employee) {
    console.log(employee[key])
}
console.log(Object.keys(employee)) // returns an array of keys in the employee object
console.log(Object.values(employee)) // returns an array of values in the employee object
console.log(Object.entries(employee)) // returns an array of key-value pairs in the employee object