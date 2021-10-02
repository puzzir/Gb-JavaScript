
// товар, цена
var basket = [["товар1", 1000], ["товар2", 2000], ["товар3", 3000]];

function countBasketPrice(){
    var basketPrice = 0;
    for (var i = 0; i < basket.length; i++) {
        basketPrice += basket[i][1];
    }
    return basketPrice
}

console.log(countBasketPrice());
