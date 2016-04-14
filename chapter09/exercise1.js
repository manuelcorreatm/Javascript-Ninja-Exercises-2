function dataParse(str) {
    return eval("(" + str + ")");
}

var str = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}";
var obj = dataParse(str);
console.log(obj.myFn(1,2)); //45