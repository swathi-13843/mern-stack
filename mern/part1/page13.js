
const obj ={ 
    name: "wipro", lastprice: 100, currprice: 150
  };
function calc(obj){
    console.log(obj.lastprice);
    obj.growth=obj.currprice - obj.lastprice;
    console.log(obj);
    obj.growthper = (obj.growth*100)/obj.lastprice;
    console.log(obj);
}
calc(obj)