//some - some returns the true or false if the condition statisfies the list returns the true
// const numbers = [25,21,27,20]
// const result = numbers.some((number)=>number > 20)
// console.log(result)

//every should match with every condition
// const numbers = [25,21,27,20]
// const result = numbers.every((number)=>number > 20)
// console.log(result)

const subjectscore = [50,45,90,30];
const result = subjectscore.every((score) => score>40)
//const result = subjectscore.some((score) => score>40)
console.log(result)