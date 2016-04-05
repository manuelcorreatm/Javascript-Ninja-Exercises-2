function OnlyNumbers() {
    var number;

    this.getNumber = function () {
        return this.number;
    };

    this.setNumber = function (number) {
        if (typeof number == "number") {
            this.number = number;
        } else {
            console.log("Error: Only numbers are allowed.");
        }
        
    }
}

var customObj = new OnlyNumbers();
customObj.setNumber(-90);
console.log(customObj.getNumber());