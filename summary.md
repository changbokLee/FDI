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


html 부모 자식요소
Parent
child
parent


section 부모태그
h1 자식태그
ul 후손태그
li

빈태그
: img />해서 스스로닫는다.
> 뒤에 /붙는태그 /가없는 태그 범위가존재하지않아서 알아서 그범위내에서 해야하고 속성 값이 또 포함된다.

head 정보

body 구조

부분 charset = 인코딩방식
description 설명방식

doctype = dtd document type defintion 마크업언어에서 문서형식을 정의합니다.

* 선택자 속성을 주는게 css이다
> css 속성은 properties html은 atribute태그에 직접작성하는 인라인방식
>div style 로 해서 한다.
>html에 포함하기 내장방식이다

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

* header안에는 header랑 footer는 입력할수가없다.
* footer는 header와 footer을 입력할수가 없다.

h1 h2 태크는 block
main block
article 독립적으로 구분되거나 직정사용가능한거를 출전