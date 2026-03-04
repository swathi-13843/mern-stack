// function outer() {
//     let n = 1
//     function inner() {
//         return n++
//     }
//     return inner
// }
// const f=outer()
// console.log(f()) // 1
// console.log(f()) // 2

// function outer2() {
//     let password= "1234"
//     function inner2(pwd) {
//         if (pwd === password) {
//             return "Access granted.";
//         } else {
//             return "Access denied.";
//         }
//     }
//     return inner2;
// }
// const checkPassword = outer2();
// console.log(checkPassword("abcd")); // Access denied.

function outer() {
    let n = 1
    function inner() {
        return n++
    }
    return inner
}
const f=outer()
console.log(f()) // 1
console.log(f()) // 2

function outer2() {
    let password= "1234"
    function inner2(pwd) {
        return pwd === password ? "Access granted." : "Access denied.";
    }
    return inner2;
}
const checkPassword = outer2();
console.log(checkPassword("abcd")); // Access denied.