function fibonacci(position) {
    if (position == 1 || position == 2) {
        return 1;
    } else {
        return fibonacci(position - 1) + fibonacci(position - 2);
    }
}


var n = fibonacci(4); // 3
var m = fibonacci(9); // 34

console.log(n);
console.log(m);