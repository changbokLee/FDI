function key(e){
    var dv = document.getElementById("res");
    var str =""
    str= "누른키:"+ e.key+ "<br>" + "코드:" + e.code;
    dv.innerHTML =str;
}