function F21(numbers) {
    var isValid = true;
    for (var i = 0; i < numbers.length; i++) {
        if (IsValidNumber(numbers[i])) {
        }
        else {
            isValid = false;
        }
    }

    if (isValid) {
        // returns duplicates as an array
        var findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

        // if the array is empty, it means no duplicates were found and the input is valid
        if (findDuplicates(numbers).length == 0) {
            // isValid = true
            return isValid;
        } else {
            isValid = false;
            return isValid;
        }
    }
    else {
        return isValid;
    }
}


function IsValidNumber(n) {
    var isValid = false;
    // checks if input is a number and is an int
    if (!isNaN(n) && Number.isInteger(n)) {
        // checks if the value is between 0 and 9
        if (n >= 0 && n <= 9) {
            isValid = true;
        }
    }
    return isValid;
}