function distance() {
    var distance = 0;
    if (arguments.length == 6) {
        //calculate 3D distance
        distance = Math.sqrt(Math.pow(arguments[3] - arguments[0], 2) +
            Math.pow(arguments[4] - arguments[1], 2) +
            Math.pow(arguments[5] - arguments[2], 2));
        return distance;
    } else if (arguments.length == 4) {
        //calculate 2D distance
        distance = Math.sqrt(Math.pow(arguments[2] - arguments[0], 2) +
            Math.pow(arguments[3] - arguments[1], 2));
        return distance;
    } else {
        //throw error
        console.log("Error: Incorrect number of parameters.");
        return -1;
    }
}

var x1 = 1, y1 = 2, z1 = 1;
var x2 = 2, y2 = 2, z2 = 4;
var delta1 = distance(x1, y1, x2, y2); // delta = 1
var delta2 = distance(x1, y1, z1, x2, y2, z2); // delta = 3.1622…
distance(x1, x2); // should throw an error: Insufficient parameters
console.log(delta1);
console.log(delta2);