const employee = {
    name: "John Doe",
    address : {
        city : "hyderabad",
        state : "Telangana"
    }
}
console.log(employee.address.city) // accessing nested city property
employee.address.country = "India" // adding new property country to the nested address object
console.log(employee)