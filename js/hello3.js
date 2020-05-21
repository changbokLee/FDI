// var result;
// result = confirm("정말로 회원탈퇴를 하시겠습니까?");

// if (result)
//     document.write("탈퇴되었습니다");

// else
//     document.write("탈퇴가 취소되었습니다");

// var score = prompt("점수를입력해주세요");
// var att= 55;

// if (att> 70)
//     if(score>80)
//         document.write("졸업가능");
//     else
//         document.write("츨석율가능 , 성적미달");
// else
//     if(score>= 80)
//         document.write("출석율 , 성적 가능");

//     else
//         document.write("출석율 미달, 성적미달")

// if (score >90)
//     document.write("A학점");

// else if(50 <score & score <80)
//     document.write("B학점");

// else if (10< score & score <50)
//     document.write("C학점");

// else
//     document.write("F학점");


// // var site =prompt("네이버 , 다음 , 구글 중 즐겨 사용하는 포털검색 사이트는");
// // var url;

// // switch(site) {
// //     case "구글" : url = "http://www.google.com"  ;
// //     document
// //     break;
// //     case "네이트" : url = "http://www.nate.com"  ;
// //     break;
// //     case "네이버" : url = "http://www.naver.com"  ;
// //     break;
// //     default :alert("보기중에없는 사이트입니다");
// }

var site =prompt("구글, 네이버 , 네이트 중 즐겨 사용하는 포털검색 사이트는");
var link =" http://www.google.com"
var naver = " https://www.naver.com/"
var nate = " http://www.nate.com"
    if (site == "구글" ) 
        location.href = link;
    
    else if (site == "네이버" )
        location.href = naver;
     
    else if ( site == "네이트")
        location.href = nate;
    else
        document.write("여기에없음")
        

