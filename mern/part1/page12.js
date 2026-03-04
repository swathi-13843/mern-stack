// const greet = () => {
//     console.log("Hello, World!")
// };
// greet()

function beststock(companies) {
    const stockprice = [
        { name: "wipro", lastprice: 100, currprice: 150  },
        { name: "deloite", lastprice: 120, currprice: 180 },
        { name: "HDFS", lastprice: 150, currprice: 120 },
    ];
    let a = [];
    for(i = 0; i < stockprice.length; i++) {
        a[i] = stockprice[i].currprice - stockprice[i].lastprice;
    }
    if(a[0] > a[1] && a[0] > a[2]) {
        console.log(stockprice[0].name)
    }
    else if(a[1] > a[0] && a[1] > a[2]) {
        console.log(stockprice[1].name)
    }
    else {
        console.log(stockprice[2].name)
    }
}
beststock()