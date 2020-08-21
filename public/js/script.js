const table = document.querySelector(".tableBody");
var noOfElements = document.querySelector(".tableBody").children.length;

var allTr = document.querySelector(".tableBody").querySelectorAll("tr");



//console.log(noOfElements)

var socket = io();

socket.on('gotcha1', function (data) {
    //var x = $(".tableBody").children().length;
   // console.log(x)
   // if (x < 3) {
        var name = data.name;
        var price = data.price;
        var pl = data.pl;

        appendStock(name, price, pl);
        //console.log(x);
    //}
});

socket.on('gotcha2', function (data) {

    var name = data.name;
    var price = data.price;
    var pl = data.pl;

    updateAppend(name, price, pl);
});

socket.on('gotcha3', function (data) {

    var name = data.name;

    deleteAppend(name);
});

function appendStock(name, price, pl) {

  //  if (x < 3) {

    var app = document.createElement('tr');
    app.className = name;

        var appendth = document.createElement('td');
        var textnode = document.createTextNode(name);
        appendth.appendChild(textnode);

        var appendth1 = document.createElement('td');
        var textnode1 = document.createTextNode(price);
        appendth1.appendChild(textnode1);

        var appendth2 = document.createElement('td');
        var textnode2 = document.createTextNode(pl);
        appendth2.appendChild(textnode2);

    var oo = table.appendChild(app);
    //  oo.classList.add(name);
        oo.appendChild(appendth);
        oo.appendChild(appendth1);
        oo.appendChild(appendth2);
    //}
};

function updateAppend(name, price, pl) {

    var stockElement = document.querySelectorAll("tr");
    stockElement.forEach((el) => {
        if (el.className === name) {
            console.log(el.className)
            var child1 = el.childNodes[2];
            var firstChild = child1.firstChild;
            firstChild.remove();
            if (pl > 0) {
                var textnode = document.createTextNode(pl);
                textnode.className = "positiveValue";
                child1.appendChild(textnode);
                console.log(firstChild)
            }
            else if (pl < 0) {
                var textnode = document.createTextNode(pl);
                textnode.className = "negativeValue";
                child1.appendChild(textnode);
            }
            else if (pl === 0) {
                var textnode = document.createTextNode(pl);
                textnode.className = "zeroValue";
                child1.appendChild(textnode);
            }
            else
                var textnode = document.createTextNode(pl);
                 child1.appendChild(textnode);
        }
    })
};

function deleteAppend(name) {

    var stockElement = document.querySelectorAll("tr");
    stockElement.forEach((el) => {
        if (el.className === name) {
            el.remove();
        }
    });
};
