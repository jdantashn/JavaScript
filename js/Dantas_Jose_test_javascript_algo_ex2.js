function F21(numbers) {
    if(numbers.length == 9){
        for (var i = 0; i < numbers.length; i++) {
            // checks if value is a number and is an int and checks if the value is between 0 and 9
            if (Number.isInteger(numbers[i]) && Number(numbers[i]) >= 1 && Number(numbers[i]) <= 9) {
            }
            else {
                // is not between 1-9
                console.log("is not between 1-9");
                return false;
            }
        }
        // if the array is empty, it means no duplicates were found and the input is valid
        var findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
        if (findDuplicates(numbers).length == 0) {
            return true
        }
        else {
            console.log("duplicates found");
            // duplicates found
            return false;
        }
    }
    else{
        console.log("array is not 9 length");
        // array is not 9 length
        return false
    }
}