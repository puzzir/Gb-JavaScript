var a = 2;
var b = 1;
if(a >= 0 && b >= 0) {
    alert(a - b);
}
if(a < 0 && b < 0) {
    alert(a * b);
}
if(a >= 0 && b < 0 || a < 0 && b >= 0) {
    alert(a + b);
}