function calc(cbox){
    if(cbox.checked)
        sum+= parseInt(cbox.value);
    else
        sum = parseInt(cbox.value);

    var result = document.getElementById("res");
    result.value =sum;
}
