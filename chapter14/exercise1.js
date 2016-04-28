var form = document.getElementById("form");

form.addEventListener("input", renderTable, false);

function renderTable() {
    var table = document.getElementById("table");
    var width = this.children[0].value;
    var height = this.children[1].value;
    var tr, td, tbody;

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    tbody = document.createElement("tbody");
    for (var i = 0; i < height; i++) {
        tr = document.createElement("tr");
        for (var j = 0; j < width; j++) {
            td = document.createElement("td");
            td.textContent = j+(i*width);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
        
    
    
}