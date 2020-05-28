function makecurser(){
    var cur =document.getElementById("cursor");

    document.onmousemove = function(e){
        cur.style.left = event.clientX+ "px";
        cur.style.top = event.clientY+ "px";
    }
}
