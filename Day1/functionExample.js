function myFunction(x) {
    var sum = 0;
    for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
        var e = x_1[_i];
        sum += e;
    }
    return sum;
}
var value = new Array();
value.push(1);
value.push(2);
value.push(3);
console.log(myFunction(value));
