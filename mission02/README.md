# Elemental Movie Poster 과제

![과제](https://github.com/minomad/js-homework/assets/131448929/0554ea92-110f-478f-82f3-97233ac05d7d)

- 유틸함수 - getNode, attr, addClass, removeClass 함수를 사용했습니다.

## 이벤트위임

- target이 아닌 li는 `is-active` 클래스를 forEach문으로 제거하고 target으로 가져온 li만 `is-active` 클래스가 추가되도록 `addClass` 함수를 사용했습니다.

- `attr`함수로 target의 data-index 값을 index에 할당하고 그 값을 함수의 인수로 할당했습니다.

```js
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
```

## dataIndex 함수

- 반복적으로 사용되는 `data[index - 1] `코드를 함수로 만들어 반환했습니다.

- data.js에서 target이 된 index값에 해당하는 요소를 반환합니다.

```js
const dataIndex = (index) => {
  return data[index - 1]; //
};
```

## 배경색 변경

- `dataIndex`함수에서 반환된 값으로 배열인 color값을 추출하고 배열 구조 분해 할당을 해서 배경색상의 변수로 사용했습니다.

- li를 클릭할 때 해당하는 index값으로 data를 참조해서 color값이 변경됩니다.

```js
const setBgColor = (index) => {
  const { color } = dataIndex(index);
  const [colorA, colorB] = color;
  body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
};
```

## 텍스트 변경
dataIndex 요소에서 name 값을 할당해서 textContent로 출력했습니다.
```js
const setNameText = (index) => {
  const { name } = dataIndex(index);
  nickName.textContent = name;
};
```

## 이미지 변경
- 대문자로 지정되어 있는 data의 name값을 소문자로 변경해서 src경로에 할당하고 aseets폴더에 있는 이미지를 불러왔습니다.

```js
const setImage = (index) => {
  const { alt, name } = dataIndex(index);
  const src = name.toLowerCase();

  visualImg.src = `./assets/${src}.jpeg`;
  visualImg.alt = alt;
};
```

## 이벤트

```js
navigation.addEventListener('click', handleSlider);
```
