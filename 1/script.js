
function numberToObject(num){
    if(num > 999) {
        console.log("Число должно быть до 999");
        return null;
    }
    var numberStr = num.toString();
    while(numberStr.length != 3) {
        numberStr = "0" + numberStr;
    }
    var numberObject = {};
    numberObject.единицы = Number.parseInt(numberStr[2]);
    numberObject.десятки = Number.parseInt(numberStr[1]);
    numberObject.сотни = Number.parseInt(numberStr[0]);
    return numberObject;
}

console.log(numberToObject(97));