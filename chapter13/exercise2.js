var btn = document.getElementById("btn");

function fn() {
    var mtr = document.getElementById("mtr");
    mtr.value = mtr.value + 1;
    if (mtr.value == 3) {
        this.removeEventListener("click", fn, false);
    }
}

btn.addEventListener("click", fn, false);