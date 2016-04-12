function getRGB(hexColor) {
    //var regexp = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i;
    var regexp = /[0-9a-f]{2}/ig;
    var hexArr = hexColor.match(regexp);
    if (hexArr.length != 3) return "Error: Incorrect format"
    var rgb = "rgb(";
    for (var i = 0; i < hexArr.length; i++) {
        rgb += parseInt(hexArr[i], 16) + ",";
    }
    return rgb.replace(/,$/, ")");
}

console.log(getRGB("#3020FF"));