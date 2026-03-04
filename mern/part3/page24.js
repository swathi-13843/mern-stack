const employees = {
    name: "John Doe",
    city : "hyderabad",
    state : "Telangana",
    country : "India"
}
// const name = employees.name;
// const city = employees.city;
const { name, city } = employees; // object destructuring to extract name and city properties
console.log(name , city);