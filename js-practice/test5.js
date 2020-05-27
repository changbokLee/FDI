var n =  prompt("점수를 입력해주세요");

function star(num){
    var m = parseInt(num);
    for(var i = 0; i<=m; i++){
        for(var j = 1; j<= i; j++){
            document.write("*");
            
        }
        document.write("<br>");
    }
}
