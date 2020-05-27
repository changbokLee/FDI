var current = new  Date();
var tag = document.getElementById("thebody");
if(current.getSeconds()%2 == 0)
    document.body.style.backgroundColor = "violet";

else
    tag.style.body.backgroundColor = "lightskyblue";

 document.write(current);
 document.write(current.getHours(), "시");
 document.write(current.getMinutes(), "분");
 document.write(current.getSeconds(), "초");