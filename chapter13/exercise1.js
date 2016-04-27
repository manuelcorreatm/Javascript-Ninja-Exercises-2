var table = document.getElementsByTagName("table")[0];

table.addEventListener("click",
    function () {
        if (event.target.tagName.toLowerCase() == "td") {
            alert(event.target.textContent);
        }
    }
);