var myLib = {
    math: {
        real: {
            add: function (a, b) { /*code goes here*/ console.log("real add");},
            sub: function (a, b) { /*code goes here*/ console.log("real sub"); },
            mul: function (a, b) { /*code goes here*/ console.log("real mul"); }
        },
        complex: {
            Num: function (real, img) {/*code goes here*/ console.log("complex num"); },
            add: function (a, b) { /*code goes here*/ console.log("complex add"); },
            sub: function (a, b) { /*code goes here*/ console.log("complex sub"); },
            mul: function (a, b) { /*code goes here*/ console.log("complex mul"); }
        },
        matrix: {
            add: function (a, b) { /*matrix addition*/ console.log("matrix add"); },
            sub: function (a, b) { /*matrix subtraction*/ console.log("matrix sub"); },
            mul: function (a, b) { /*matrix multiplication*/ console.log("matrix mul"); },
            eye: function (size) { /*identity matrix*/ console.log("matrix eye"); },
            dot: function (m, a) { /*dot product*/ console.log("matrix dot"); },
            times: function (a, b) { /*element-wise multiplication*/ console.log("matrix times"); }
        }
    }
};

//var answer = myLib.math.real.sub(myLib.math.real.add(20, 22), myLib.math.real.mul(2, 5));
with (myLib.math.real){
    var answer = sub(add(20, 22), mul(2, 5));
}

var answer = (function (x) {
    return x.sub(x.add(20, 22), x.mul(2, 5));
})(myLib.math.real);

//var ans = myLib.math.matrix.times(myLib.math.matrix.eye(4), myLib.math.complex.sub(new myLib.math.complex.Num(myLib.math.real.add(5, 2), -3), new myLib.math.complex.Num(3, 4)));
with (myLib.math) {
    var ans = matrix.times(matrix.eye(4), complex.sub(new complex.Num(real.add(5, 2), -3), new complex.Num(3, 4)));
}

var ans = (function (m, c, r) {
    return m.times(m.eye(4), c.sub(new c.Num(r.add(5, 2), -3), new c.Num(3, 4)));
})(myLib.math.matrix, myLib.math.complex, myLib.math.real);