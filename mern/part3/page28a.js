const Products = [
    { id : 1, name: 'Product 1', price: 25 },
    { id : 2, name: 'Product 2', price: 50 },
    { id : 3, name: 'Product 3', price: 45 }
   
];
//display all products using forEach
Products.forEach((product) => {
    console.log(product);
})

//display products with price > 40 using filter 
const expensiveProducts = Products.filter(product => product.price > 40);
console.log(expensiveProducts);

//add product 2 to cart using spread operator with a new key quantity and assign 1
let cart = [];
let productToAdd = Products.find(product => product.id === 2);
productToAdd = { ...productToAdd, quantity: 1 };
cart.push(productToAdd);
console.log(cart);
