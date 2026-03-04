const obj = [
    {
        name:"wipro",
        lastprice:200,
        currprice:250,
    },
    {
        name:"deloite",
        lastprice:100,
        currprice:150,
    },

];
function calc(obj){
    console.log(obj.lastprice);
    obj.growth=obj.currprice - obj.lastprice;
    obj.growthper = (obj.growth*100)/obj.lastprice;
    console.log(obj);
}
calc(obj[0]);
calc(obj[1]);