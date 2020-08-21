
function scrip(name, price) {
    this.name = name;
    this.price = price;
}

const appendArr = {};

appendArr.scrip1 = function () {
    
    for (var i = 0; i < a1.length; i++) {
        for (var j = 0; j < b1.length && j < 3; j++) {

            if (a1[i] === b1[j]) {
                continue;
            }
            else {
                var createObject = new scrip(a1[i], a2[i]);     
                b2.push(createObject);                                    
                b1.push(a1[i]);                     
        //        console.log(b1)
            }
        }
    }
};

appendArr.scrip2 = function () {

    for (var i = 0; i < 3; i++) {
        
                var createObject = new scrip(a1[i], a2[i]);
                b2.push(createObject);
                b1.push(a1[i]);    
    }
};

module.exports = appendArr;