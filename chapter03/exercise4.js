function Image(data, width, height, name) {
    this.width = width;
    this.height = height;
    this.name = name;
    this.data = data;
    this.data[1599] = "3F21B3";
}

Image.prototype.pixelData = function (x, y) {
    if (x > this.width || y > this.height || x < 1 || y < 1) {
        return "Error: Out of bounds";
    } else {
        return this.data[((x - 1) * this.height) + (y - 1)];
    }
    
}

var data = new Array (1600); // 40 x 40 px dummy image data
var img = new Image (data, 40, 40, "myImage");
console.log(img.width); // 40
console.log(img.height); // 40
console.log(img.name); // ‘myImage’
console.log(img.pixelData(0, 0)); // returns the color of the pixel at that position. Starts at (1,1).