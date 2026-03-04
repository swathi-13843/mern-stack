//objects

const obj={
    name:"john",
    skill:"javascript",

};
console.log(obj)


const obj2 = new Object();
obj2.name = "meena";
obj2.skill = "python";
console.log(obj2)

obj.score = 97
console.log(obj)

obj["rank"]=1
console.log(obj)

//we use [] if it is a variable or if the key has spaces or special characters. 
// Otherwise, we can use dot notation to access and modify object properties.
let key = "city";
let value = "New York";

obj[key] = value; // Using bracket notation to add a new property with a dynamic key
console.log(obj)

delete obj.skill; // Deleting the skill property from obj
console.log(obj)

// //accessing object properties
// console.log(obj.name) // dot notation
// console.log(obj['skill']) // bracket notation