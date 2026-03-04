const stock = {
    name :"wipro",
    lastprice : 500,
    currprice : 550,
    growth : function() {
        return (this.currprice - this.lastprice);
    },
    growthpercent : function() {
        return ((this.currprice - this.lastprice) / this.lastprice) * 100;
    }
}
console.log(stock.growth()) // 50
console.log(stock.growthpercent()) // 10


// const stock = {
//     name :"wipro",
//     lastprice : 500,
//     currprice : 550,
//     growth : function = () => {
//         return (this.currprice - this.lastprice);
//     },
//     growthpercent : function =() => {
//         return ((this.currprice - this.lastprice) / this.lastprice) * 100;
//     }
// }
// console.log(stock.growth()) // 50
// console.log(stock.growthpercent()) // 10

//spread operator is used to create a new object with the same properties as the original object, but with some modifications.
//the above code throws an error because arrow functions do not have their own this context, they inherit it from the parent scope. 

