const appendArr = require('../iteration/appendArr.js');

function globalarr(name, price) {
    this.name = name;
    this.price = price;
}

const simpleSell = {};

simpleSell.amount = 100000;

simpleSell.init = function (val) {
    //var b1 = [];
   // var b2 = [];
    for (var i = 0; i < val[2].length; i++) {
       // console.log("checking..")
           
        //if (b1.length === 0) {
            
        if (val[2][i] > -1.75 && val[2][i] < 1) {
           // console.log("i got one")

            a1.push(val[0][i]);   //a1[]quote array
            a2.push(val[1][i]);  //a2[]price array
            var createObject2 = new globalarr(val[0][i], val[1][i]);
            Alpha.push(createObject2);
            
        }
        else {
            continue;
        }
        
    }
    //console.log(Alpha)
       // else {
         //   return;
        //console.log(a1)

   // setTimeout(() => {
        //console.log(a1)
        //console.log(a2)
   // }, 1000);
   
};

simpleSell.cal = function (a) {
    var quantity = 100000 / a2[0];
    var profit = quantity * a2[0] - quantity * sellprice 

};

simpleSell.exitOnCondition = function (a) {
   
    for (var i = 0; i < a[2].length; i++) {
        var x = a[2][i] - 0.5;
        var y = a[2][i] + 0.5;
        for (var j = 0; j < a1.length; j++) {
            if (a1[j] === x || a1[j] === y) {
                //then i will exit
                //show profit 
                //i will remove element

            }
        }
    }
};
simpleSell.profit = function (x) {
    var sum = 30000;
    var qty = sum / x.price;
    var profit;
    //var z = a2
    //for (var i = 0; i < a[2].length; i++) {
    Alpha.map((y) => {
        if (y.name === x.name) {
             profit = qty * x.price - qty * y.price;
            //var a = Math.round(qty) * x.price;
           // var b = Math.round(qty) * y.price;
          //  profit = a.toFixed(2) - b.toFixed(2);
            console.log(profit)
           // return profit;         
           // x * y.price
        }
       
        // }// or quantity*a[1][i] for current price
    });
   

    return profit
};

simpleSell.exitStopLoss = function () {
    Alpha.map((x) => {
        for (var i = 0; i < b2.length; i++) {
            // var price = b2[i].price + 1;
            if (x.name === b2[i].name) {
                while (x.price > (b2[i].price + 1)) {
                    var name = x.name;
                   // b2.splice(i, 1);
                    return name;
                    console.log(name)
                }
            }
        }
    })
};



simpleSell.exitProfit = function () {
    
    Alpha.map((x) => {
        for (var i = 0; i < b2.length; i++) {
            // var price = b2[i].price + 1;
            if (x.name === b2[i].name) {
                while (x.price > (b2[i].price - 1)) {
                    var name = x.name;
                   // b2.splice(i, 1);
                    return name;
                }
            }
        }
    })
    
};

simpleSell.afterInit = function (val) {
    for (var i = 0; i < a2.length; i++) {
        if (b1.length === 3) {
            continue;
        }
        else if (b1.length === 0) {
            appendArr.scrip2();
        }
        else if (b1.length < 3) {
            appendArr.scrip1();
        }
        else
            continue;
           
    }
   
};

simpleSell.appendOnScreen = function () {
   
};

simpleSell.appendExit = function () {
//simply delete element and book profit
};

    module.exports = simpleSell;