/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리 setBgColor  setImage  setNameText 

// 이벤트 위임
*/

//선언
const navigation = getNode('.nav');
const list = getNodes('.nav li');
const nickName = getNode('.nickName');
const visualImg = getNode('.visual img');
const body = getNode('body');

//@ handleSlider 함수
const handleSlider = (e) => {
  e.preventDefault();

  const target = e.target.closest('li');
  const index = attr(target, 'data-index');
  if (!target) return;

  list.forEach((li) => {
    removeClass(li, 'is-active');
  });

  addClass(target, 'is-active');

  setBgColor(index);
  setNameText(index);
  setImage(index);
};

//@ setBgColor 함수
const setBgColor = (index) => {
  const colorA = data[index].color[0];
  const colorB = data[index].color[1];
  body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
};

//@ setNameText 함수
const setNameText = (index) => {
  const name = data[index].name;
  nickName.textContent = name;
};

//@ setImage 함수
const setImage = (index) => {
  const alt = data[index].alt;
  const imgName = data[index].name;
  const src = imgName.toLowerCase();

  visualImg.src = `./assets/${src}.jpeg`;
  visualImg.alt = alt;
};

//@ 이벤트
navigation.addEventListener('click', handleSlider);
