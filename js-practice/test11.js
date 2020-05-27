function calculate(){
    var tmp = document.getElementById("exp");
    var res = document.getElementById("result");
    res.value = eval(tmp, value);
}