function distance1() {
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
    } else if (arguments.length == 2) {
        if (Array.isArray(arguments[0]) && Array.isArray(arguments[1])) {
            return distance1.apply(this, arguments[0].concat(arguments[1]));
        } else {
            //throw error
            console.log("Error: Incorrect number of parameters.");
            return -1;
        }
    } else {
        //throw error
        console.log("Error: Incorrect number of parameters.");
        return -1;
    }
}

console.log(distance1(1, 2, 2, 2)); // returns 1 (done as part of exercise 5)
console.log(distance1([1, 2], [2, 2])); // returns 1
distance1([1, 2], [2, 2, 4]); // error: incompatible point data