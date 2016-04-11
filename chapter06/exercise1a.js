function Shape() { };
Shape.prototype.pEdges = 0;
Shape.prototype.fnDisplay = function () {

};

function Quadrilateral() {
    this.pEdges = 4;
}
Quadrilateral.prototype = new Shape();
Quadrilateral.prototype.fnArea = function (b, h) {
    return b * h;
};
Quadrilateral.prototype.fnPerimeter = function (p1, p2, p3, p4) {
    return p1 + p2 + p3 + p4;
};

function Square() {
    this.fnPerimeter = function (p1) {
        return p1 * 4;
    }
}
Square.prototype = new Quadrilateral();

function Triangle() {
    this.pEdges = 3;
}
Triangle.prototype = new Shape();
Triangle.prototype.fnArea = function (b, h) {
    return (b * h) / 2;
};
Triangle.prototype.fnPerimeter = function (p1, p2, p3) {
    return p1 + p2 + p3;
};

var mySquare = new Square();
console.log(mySquare instanceof Square);
console.log(mySquare instanceof Quadrilateral);
console.log(mySquare instanceof Shape);
console.log(mySquare.fnArea(4, 4));
console.log(mySquare.fnPerimeter(4));
console.log(mySquare.pEdges);