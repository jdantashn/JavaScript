function F31() {
    var isValid = true;
    // each i translates directly to a row
    for (var i = 0; i < to_verify.length; i++) {
        if (!F21(to_verify[i])) {
            var row_number = Number(i) + Number(1);
            console.log("Error in row: " + row_number);
            console.log(to_verify[i]);
            isValid = false;
        }
    }


    return isValid;
}



function F32() {
    var isValid = true;
    var columnArray = [];
    var columnData = [];
    var i = 0;
    var j = 0;
    for (j = 0; j < to_verify.length; j++) {
        // new column
        columnData = [];
        for (i = 0; i < to_verify.length; i++) {
            columnData.push(to_verify[i][j])
        }
        // push the columnData into a new array, each index will translate to a column
        columnArray.push(columnData);

    }
    // columnArray is now filled in with each column, just run the same validation as F31()
    for (var i = 0; i < columnArray.length; i++) {
        if (!F21(columnArray[i])) {
            var row_number = Number(i) + Number(1);
            console.log("Error in row: " + row_number);
            console.log(columnArray[i]);
            isValid = false;
        }
    }

    return isValid;
}