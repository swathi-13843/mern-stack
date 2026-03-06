//setTimeout(()=>{},3000)

// console.log("beginning")
// setTimeout(()=>{
//     console.log("hello world")

// },3000)
// console.log("ending")

// function f1() {
//     console.log("beginning")
// }
// function f2() {
//     setTimeout(()=>{
//         console.log("hello world")
//     },3000)
    
// }
// function f3() {
//     console.log("ending")
// }
// function main(){
//     f1()
//     f2()
//     f3()
// }
// main()

function f1() {
    console.log("beginning")
}
function f2() {
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("hello world")
            resolve()
            //reject("something went wrong")
            },3000)
        })
}
function f3() {
    console.log("ending")
}
async function main(){
    try{

        f1()
        await f2()
        f3()

    }
    catch(error){
        console.log(error)
    }
    
}
main()