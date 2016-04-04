function CustomObject(a, b) {
    this.a = a;
    this.b = b;
}
CustomObject.prototype.c = function () { return this.a + this.b; };

function printObjProp(obj, inherited) {
    if (inherited == true) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                console.log(prop);
            }
        }
    } else {
        for (var prop in obj) {
            console.log(prop);
        }
    }

}


var obj = new CustomObject(1, 2);
printObjProp(obj); // output: a, b, c
printObjProp(obj, false); // output: a, b, c
printObjProp(obj, true); // output: a, b
