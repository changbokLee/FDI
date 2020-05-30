## 웹에서 사용하는 이미지

### 비트맵과 벡터 이미지

이미지는 크게 비트맵과 벡터로 구분됩니다

> 비트맵은 각 픽셀이 모여만든 정보의집합으로 레스터이미지라고도부릅니다 화면에 랜더링된다

정교하고 다양한 색상을 자연스럽게 표현

확대축소시 계단현상
ex) jpg png gif

> 벡터 : 이미지가 가지고있는 점이나 선등 좌표에 대한 정보를 온전히 가지고 있으며 그를 화면에 랜더링합니다


ex) 일러스트


### 이미지 예시
* JPEG :  24비트 손실압축입니다.

* PNG : Gif 의 대체포맷으로 개발되었습니다
비손실압축
8비트 /24비트
W3C권장포맷 = 이미지 고민될떄 그래서 하면됨.

* GIF: 이미지 파일내에 이미지 및 문자열 같은 정보들을 저장 할 수있습니다.

비손실 압축

* WEBP : JPG, PNG, GIF 를 모두 대체 할 수 있는 구글이 개발한 이미지 포맷입니다

완벽한 손실 비손실압축지원
GIF 같은 애니메이션 지원


* SVG
마크업기반의 백터그래픽을 표현하는 포맷입니다.
해상도 자유로움
css로 스타일링가능
자바스크립트로 이벤트핸들링가능

<hr>

* html 부모 자식요소
Parent
child
parent


* section 부모태그
h1 자식태그
ul 후손태그
li

빈태그
: img />해서 스스로닫는다. 뒤에 /붙는태그 /가없는 태그 범위가존재하지않아서 알아서 그범위내에서 해야하고 속성 값이 또 포함된다.

head 정보

body 구조

부분 charset = 인코딩방식
description 설명방식

doctype = dtd document type defintion 마크업언어에서 문서형식을 정의합니다.

* 선택자 속성을 주는게 css이다
css 속성은 properties html은 atribute태그에 직접작성하는 인라인방식
div style 로 해서 한다.
html에 포함하기 내장방식이다

### html 은 그본적으로 블록레벨요소와 인라인요소로 구성된다
* 블록요소 지정해준만큼된다
width:100% height:0로 시작
수직으로 쌓인다.
margin padding 위아래 좌우 사용가능하다
ex)div j1 p

* 인라인 요소  
인라인요소는 필요한만큼한다
크기를 지정할수없다
수평으로 쌓인다.
width:0 height:0으로시작
margin padding 위아래는 사용을할수없다
ex)span img

* link 요소 현재문서와 외부 리소스와의 관계를 명시합니다.
 empty tag 
 chroset

header안에는 header랑 footer는 입력할수가없다.
 footer는 header와 footer을 입력할수가 없다.

<hr>

### 블락요소
* h1 h2 태크는 block
* main block
* section block요소임
* article 독립적으로 구분되거나 직정사용가능한거를 출전 ,주로 블로그 글쓸때 씀
* div : 아무의미없음 blcok 요소임
* nav : 다른페이지 링크를 제공하는 영역을 설정
* address : block 으로 설정됨 보통주소를함
* ol ul 순서가필요한거는 ol 순서가필요하지않은거는 ul
* li display list item
* dl과 dt는 키값과 value값으로 유용하게 사용가능
display: block
* p는 paragraph 의 단어로 하나의 문단을설정
 block요소
 * hr 문단의 분리를 위해 설정 display : block
 * pre 서식이 미리 지정된테긋트를 설정 텍스트의 공백과 줄바꿈을 유지할수있음
 display: block

### javascript
* 변수는 바뀔수있는 값 변수를 선언할떄 let = var는 구형
* 상수는 const
=======
<hr>

 ### 인라인 요소
 * a태그 display: inline이다 target self등으로 설정한다.
 * abbr 설명하려고 할때 쓰는거다 속성은 inline
* b 문체가 다른글자의 범위 display:inline
* mark display: inline
* em 단순한의미를 강조표시 
* strong 태그 의미의 중요성 나타내기위해사용
* i 아이콘이나 특수기호를위해사용 display: inline
* cite 창작물에 대한 참조를 설정
* q 인용문 할때 쓰는 태그
* u 밑줄
* span 본질적으로 아무것도나타내지않는 것 인라인요소
* img inline 속성임
> x는 배수단위로 이미지크기 조절 
* audio 소리 재생하는것 autoplay 준비되면 재생 
* video 영상재상하는것 autoplay 준비되면 바로재생
* canvas 그래픽이나 애니메이션을 랜더링

* table : 디스플레이 테이블
* form  양식



-----------------------------
* max-width: 최대넓이 min-width:최소넓이
* 가상클래스 선택자 :로 함
* %는 부모의 가로사이즈에 영향을 받는다
* em 부모로부터 받은 폰트사이즈로서 설정된다
* vmin vmax 
* line-height: 줄의 높이를 설정할떄씀
<<<<<<< Updated upstream
* text-ident 들여쓰기 
* letter-spacing  자간을 설정
* float: left 물흐르듯이 정렬
* float: left;


--------------------
* position relative 자기자신을 중심으로 하는것이다
주변있는 형제요소에 영향을 받는다 .영향을 준다

* postion :sticky 스크롤 영역기준으로 배치
* z-index 포지션이있을 떄 우선순위를 만든다
=======
* postion relative


* css: trasparent 투명
* transition 전환효과 
* translate : x,y값넣어서 움직이는것
* transform :요소의 변환효과를 지정
> scale: 크기 rotate 회전각도 skew 기울임 matrix 2차원 변환효과 transform:orgin 기준점설정 ,-style: flat 자식요소를 3d로변환하지않음

