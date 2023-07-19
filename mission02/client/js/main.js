/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리 setBgColor  setImage  setNameText 

리팩토링 

body - color

container 

h1 - nickName name

visual img ./assets/ember.jpeg 경로

nav 
li is-active src alt 변경

// 이벤트 위임
// 이미지 색상 데이터는 data.js

*/

//선언
const navigation = getNode('.nav');
const list = getNodes('.nav li');
const nickName = getNode('.nickName');


//is-active 함수
const handleSlider = (e) => {
  e.preventDefault();
  const target = e.target.closest('li');
  const index = attr(target, 'data-index');

  if (!target) return;

  list.forEach((li) => {
    removeClass(li, 'is-active');
  });
  addClass(target, 'is-active');

  const colorA = data[index - 1].color[0];
  const colorB = data[index - 1].color[1];

  setBgColor(colorA, colorB);
  setNameText(index);
};

// setBgColor 함수
function setBgColor(colorA, colorB) {
  document.body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

// setNameText 함수
function setNameText(index) {
  const name = data[index - 1].name;
  nickName.textContent = name;
}


//setImage 함수
function setImage() {
  
}

//이벤트
navigation.addEventListener('click', handleSlider);

