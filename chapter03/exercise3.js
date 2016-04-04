var myMath = {
}

myMath.add = function () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};
myMath.mul = function () {
    var sum = 1;
    for (var i = 0; i < arguments.length; i++) {
        sum *= arguments[i];
    }
    return sum;
};
myMath.fact = function (num) {
    var sum = 1;
    for (var i = 1; i <= num; i++) {
        sum *= i;
    }
    return sum;
};


var a = myMath.add(1, 2, 3); //6
var b = myMath.mul(1, 2, 3); // 6
var c = myMath.fact(3); // 6
console.log(a);
console.log(b);
console.log(c);