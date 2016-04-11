function getRGB(hexColor) {
    var regexp = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i;
    var hexArr = hexColor.match(regexp);
    var rgb = "rgb(";
    for (var i = 1; i < hexArr.length; i++) {
        rgb += parseInt(hexArr[i], 16) + ",";
    }
    return rgb.replace(/,$/, ")");
}

console.log(getRGB("#3020FF"));