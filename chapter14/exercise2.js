var form = document.getElementById("form");

function fn() {
    var parag = document.getElementById("paragraph");

    switch (event.target.value) {
        case "2":
            parag.style.columnCount = 2;
            break;
        case "3":
            parag.style.columnCount = 3;
            break;
        case "4":
            parag.style.columnCount = 4;
            break;
    }
}

form.addEventListener("click", fn, false);