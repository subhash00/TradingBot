const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 3000;

const getQuote = require('./getData/getQuote.js');
const getPrice = require('./getData/getPrice.js');
const getPerct = require('./getData/getPerct.js');
const simpleSell = require('./strategy/simpleSell.js');
require('events').EventEmitter.prototype._maxListeners = 100;

//const sell = new simpleSell();
//console.log(simpleSell.amount)
//const getDataAll = require('./getData/getDataAll.js');
app.use(express.static(path.join(__dirname, 'public')));

//app.get('/', (req, res) => {
  //  res.sendFile(__dirname + '/index.html');
//});

global.a1 = [];      //quote array satisfy condition
global.a2 = [];//price array satisfy condition
global.b1 = [];      //quote array of three
global.b2 = [];      //object array of three
global.Alpha = [];    //object array of quote with name and price
global.array1 = [];      
global.array2 = [];    //array1, 2, and 3 are generic array 
global.array3 = [];
global.c1 = []; //array for condition appending of elements

function globalarr(name, price) {
    this.name = name;
    this.price = price;
}

//setInterval(function () {

  //  getQuote();
   // getPrice();
  //  getPerct();
   // getData1();

//}, 10000);

//setInterval(function () {
async function msg() {
        const val = await Promise.all([getQuote(), getPrice(), getPerct()])
            //.then(setTimeout((a) => {
            //    simpleSell.init(a);
            //   console.log("step 1 done")
            //   }, 60
        .then(setTimeout(() => {
                simpleSell.init(val)
               // console.log(val)
            }, 8000))
        .then(setTimeout(() => {
           // for (var i = 0; i < 4; i++) {
             //   if (b2.length === 0 || b2.length < 3) {
               //     if (b1[i] === a1[i]) {
                 //       continue;
                   // }
                  //  var createObject = new scrip(a1[i], a2[i]);     //a1 & a2 are original global valid array of selected stock name and price
                  //  var x = a1[i];
                    //var y = a2[i];

                    //var createObject = { x, y }
                  //  b2.push(createObject);                                    //b1  is array of names do 3 selected stock 
                  //  b1.push(a1[i]);                      // b2 is global array of object of price and name
                 //   console.log(b2)
                     // var x = { name: appMaker};
                //    io.on('connection', (socket) => {
                  //      socket.emit('gotcha', createObject.name);
            //   });
            simpleSell.afterInit();
              //  }
          //  }
            
            
           // a1.splice(0, a1.length);
           // a2.splice(0, a2.length);
            //fs.truncate('./post2.csv', 0, function () { console.log('file empty') })
            console.log(b2)
           //console.log(a2)
        }, 8500))
        .then(setTimeout(() => {
            if (c1.length === 0) {
                b2.map((x) => {
                    let myProfit = simpleSell.profit(x);
                    //console.log(myProfit)
                    io.on('connection', (socket) => {
                        socket.emit('gotcha1', { name: x.name, price: x.price, pl: myProfit });
                        //  socket.emit('gotcha2', x.price);
                        // socket.emit('gotcha3', myProfit);
                    });
                    c1.push(x.name);
                });
            }
            else if (c1.length === 2) {
                var myProfit = simpleSell.profit(b2[0]);
                io.on('connection', (socket) => {
                    socket.emit('gotcha1', { name: b2[0].name, price: b2[0].price, pl: myProfit });

                    c1.push(b2[0].name);
                });
            }
            else
                // console.log("abc")
                b2.map((x) => {
                    var myProfit = simpleSell.profit(x);
                    io.on('connection', (socket) => {
                        socket.emit('gotcha2', { name: x.name, price: x.price, pl: myProfit });

                    });
                });
        }, 9000))
        .then(setTimeout(() => {
            var name = simpleSell.exitStopLoss();
            var name1 = simpleSell.exitProfit();
           // console.log(name, name1)
                if (name || name1) {
                    io.on('connection', (socket) => {
                        socket.emit('gotcha3', name);

                    });
                    c1.map((x) => {
                        if (x === name || x === name1) {
                            c1.splice(i, 1);
                        }
                    })

                } 
        }, 9500))
        .then(setTimeout(() => {
            a1.splice(0, a1.length);
            a2.splice(0, a2.length);
            Alpha.splice(0, Alpha.length);
            array1.splice(0, array1.length);
            array2.splice(0, array2.length);
            array3.splice(0, array3.length);
        }, 10000))
        .then(setTimeout(() => {
            //add

        }, 12000))
        .then(setTimeout(() => {
            msg();
        }, 15000))

          //  for (var i = 0; i < a2.length; i++) {
         //       if (b2.length === 0 || b2.length < 3) {
          //           b2.push(a2[i])
          //          console.log(b2)
         //       }
         //       else {
         //           continue;
         //       }
         //   }
        //})
    /* .then(setTimeout(() => {
          var name = simpleSell.exitStopLoss();
          if(name){
           io.on('connection', (socket) => {
                        socket.emit('gotcha3', name);

                    });
}
        }, 7600))
     * 
     * 
    */    
       
    //const b = await function (a) {
   // console.log(a[2].length)
    //msg().then(x => console.log(a))
       // msg();   //.then(setTimeout(() => console.log('working just fine'), 5000))
      //  .then(x => console.log(a[0][2]))
};
//msg().then(setTimeout(() => console.log('working just fine'), 5000))
//msg().then(a => console.log(a[0][2]))
//console.log(a[0].length)

//msg().then((a) => console.log(a[0][2]));
        // const a = await getQuote();
        //const b = await getPrice();
        //const c = await getPerct();

        //console.log(a[0][1]);
        //msg().then(x => console.log(a))
    
msg()

//}, 10000);
//io.on('connection', socket => {
//    socket.emit('stock', 'hi socket is working');
//});


server.listen(PORT, () => console.log(`app listening at http://localhost:${PORT}`));

