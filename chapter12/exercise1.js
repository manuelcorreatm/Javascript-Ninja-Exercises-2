function printAttr(elem, attributes) {
    for (var i = 0; i < attributes.length; i++) {
        console.log(elem.getAttribute(attributes[i]));
    }    
}

var el = document.getElementById("a");
printAttr (el, ["id", "class", "style", "val"]);
    // should print out:
    // a
    // square
    // display:inline-block
    // something important
