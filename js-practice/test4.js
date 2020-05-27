var arr = [10, 15 ,5 , 7, 20];

for( var i = 0; arr.length; i++){
    var size = arr[i];
    while(size>0){
        document.write("+");
        size --;
    }

    document.write(arr[i] + "<br>");
}