const items = {
    name : "product1",
    price : 100,
    quantity : 2,

}
item = {
    ...items, // spread operator to copy all properties from items object
    rating : 4 // adding new property rating to the item object
}
console.log(items)

//spread operator is used to create a new object with the same properties as the original object, but with some modifications.
//  In the above code, we are creating a new object item by copying all properties from the items object and adding a new property rating to it. 
// The original items object remains unchanged.

//rest operator is used to collect all remaining properties of an object into a new object.
//rest operator is used in function parameters to collect all remaining arguments into an array.
