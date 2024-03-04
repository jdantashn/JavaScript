// Init 2D array
var to_verify = [];

function F11() {


    for (var i = 0; i < array_number.length; i++) {
        // get all elements within the current row
        var rowData = array_number[i].split(" ");
        // create a new row
        var row = [];
        for (j = 0; j < rowData.length; j++) {
            // populate the new row
            row.push(rowData[j]);
        }
        // insert the new row
        to_verify.push(row);

    }

    // log the 2D array
    for (var i = 0; i < to_verify.length; i++) {
        var row = to_verify[i];
        var rowString = "";
        for (var j = 0; j < row.length; j++) {
            rowString = rowString + "," + row[j];
        }
        console.log(rowString);
    }

}



function F12(){
        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');
      
        // transforms de 2D array into an HTML table
        to_verify.forEach(function(rowData) {
          var row = document.createElement('tr');
      
          rowData.forEach(function(cellData) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
          });
      
          tableBody.appendChild(row);
        });
      
        table.appendChild(tableBody);
        document.body.appendChild(table);
}
