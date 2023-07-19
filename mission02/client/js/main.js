/* 
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
*/

//# 선언
const navigation = getNode('.nav');
const list = getNodes('.nav li');
const nickName = getNode('.nickName');
const visualImg = getNode('.visual img');
const body = getNode('body');

//# handleSlider 함수
// 이벤트 위임
const handleSlider = (e) => {
  e.preventDefault();

  const target = e.target.closest('li');
  const index = attr(target, 'data-index');

  if (!target) return;

  list.forEach((li) => {
    removeClass(li, 'is-active');
  });

  addClass(target, 'is-active');

  //data-index의 값을 받아서 함수 호출
  setBgColor(index);
  setNameText(index);
  setImage(index);
};

// 반복적으로 사용되는 data[index - 1] 코드를 함수로 만들어 반환
const dataIndex = (index) => {
  return data[index - 1]; //data배열에서 target이 된 index값에 접근
};

//# setBgColor 함수
// 배경 컬러 설정
const setBgColor = (index) => {
  // handleSlider 함수에서 target이 된 index값을 가지고 있음
  const { color } = dataIndex(index); // dataIndex값으로 color 값을 할당
  const [colorA, colorB] = color; //data의 color는 배열이라서 배열로 다시 할당
  body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`; //백리터럴로 배열로 구조 분해된 변수를 할당함
};

//# setNameText 함수
// 닉네임 설정
const setNameText = (index) => {
  const { name } = dataIndex(index);
  nickName.textContent = name;
};

//# setImage 함수
// 이미지 설정
const setImage = (index) => {
  const { alt, name } = dataIndex(index);
  const src = name.toLowerCase(); // data의 name은 대문자이기에 그 값은 소문자로 변경해서 src경로에 할당

  visualImg.src = `./assets/${src}.jpeg`;
  visualImg.alt = alt;
};

//# 이벤트
navigation.addEventListener('click', handleSlider);
