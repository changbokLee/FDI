function sum(){
    var tot = 0;
    for(var i = 0; i <arguments.length; i++)
        tot+=arguments[i];

        document.write("합계",+ tot);
    

    sum(20,30);
}