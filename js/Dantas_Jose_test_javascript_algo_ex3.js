function F31() {
    var isValid = true;
    to_verify.forEach(function(rowData) {
        if(!F21(rowData)){
            isValid = false;
        };
      });

      return isValid;
}