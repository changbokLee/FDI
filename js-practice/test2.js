var num = 1;

function gallery(dir){
    if (dir){
        if(num ==9)
            return;
        num++;
    }
    else{
        if(num ==1)
            return;
        num--;    
    }

let imgTag= document.getElementById("phto");
imgTag.setAttribute("src", "/FDI/images/pic_"+ num +".jpg");

}
