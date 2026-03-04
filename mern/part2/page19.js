// function f1(){
//     let x=20;

// }
// f1();
// console.log(x) // ReferenceError: x is not defined

// if(1===1){
//     let x=10;
// }
// console.log(x) // ReferenceError: x is not defined


//function has its own scope and variables declared with var are function scoped, not block scoped. So, x is not accessible outside the function f1 and the if block.

function f1(){
    var x=20;
    
}
f1();
console.log(x) // ReferenceError: x is not defined
if(1===1){
    var x=10;

}
console.log(x) // 10

//var is not a block scope but let and const are block scope.