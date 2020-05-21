// var username = prompt("입력주십쇼");
// var upperName = username.toUpperCase(username);
// document.write(upperName, " <br>");

// var menu = ["짜장면" , "돈까스" ,"된장찌개" ,"회덮밥" ];
// var menuNum = Math.floor(Math.random()* menu.length);
// var result = menu[menuNum];
// document.write(result);

var userEmail = prompt("이메일을 입력하세요");
var arrUrl = ["co.kr" , ".com" , ".net" ,  "or.kr", "go.kr"];
var check1 = false;
var check2 = false;

if (userEmail.indexOf("@") > 0)
    check1 = true;
    

for(var i = 0 ; i < arrUrl.length; i ++)
    {
        if (useremail.indexOf(arrUrl[i] > 0 )) 
            check2 =true;
            
    }

if(check1 == ture && check2 == true)
    document.write(userEmail);

else
    document.write("바르게입력하세요");