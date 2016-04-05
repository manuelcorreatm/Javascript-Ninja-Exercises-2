function dataType() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(typeof arguments[i]);
    }
}

dataType (1, 6.2831, "pi*2", [function(){}, 1], {}, function () {}); 