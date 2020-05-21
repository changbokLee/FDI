// var tody = new Date();
// var nowmonth = today.getMonth();
// var nowDate = today.getDate();
// var nowDay = today.getDay();


// document.write("오늘날짜" + today, "<br>");
// document.write("현재 월" + nowmonth, "<br>");
// document.write("현재 일:" + nowDate + "<br>");
// document.write("현재 " + nowDay + "<br>");

// var birth = newDate(1998,4,13);
// var b_Day = birth.getDay(); 

// var b_tmp;
// if(nowDay ==0)
//     tmp = "일요일";
// elseif (nowDay ==1)
//     tmp = "월요일";
// elseif (nowDay ==2)
//     tmp = "화요일";
// elseif (nowDay ==3)
//     tmp = "수요일";
// elseif (nowDay ==4)
//     tmp = "목요일";    
// elseif (nowDay ==5)
//     tmp = "금요일";
// elseif (nowDay ==6)
//     tmp = "토요일";    

// document.write("현재요일" + tmp +" <br>");


// var max = Math.max(34 ,5 , 345, 22, 34);

// document.write("최대값" + max + "<br>");

// var t_min = Math.min(56, 8 , 899 , 23);
// document.write("최소값" +t_min + "<br>");

// var t_pow = Math.pow(2,3);
// document.write("거듭제곱" + t_pow + "<br>");

// var t_ran = Math.random();
// document.write("바닥함수 값:"+ t_ran +"<br>");

// var t_num = Math.random();
// document.write("바닥함수 값:"+ t_num +"<br>");

document.write("<h1>가위 바위 보</h1>");


var game = prompt("가위 , 바위 , 보 중하나를 선택하세요");
var game_num;

if (game =="가위")
    game_num =1;
else if (game == "바위")
    game_num = 2;
else if (game == "바위")
    game_num = 3;


var com = Math.ceil(Math.random()*3);

document.write('<img src="/images/math_img_1.jpg">' + com );
document.write('<img src="/images/math_img_2.jpg">' + com );
document.write('<img src="/images/math_img_3.jpg">' + com );

if (com==game_num)
    document.write("맞췄습니다");
else
    document.write("틀렸습니다");