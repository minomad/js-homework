# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

---

## 과제

![과제](https://github.com/minomad/js-homework/assets/131448929/e3c50159-6be3-4f20-8a2f-763fd084f253)

### 정규표현식을 사용한 조건처리

- getElementById 메서드로 id,pw의 input에 접근하는 const선언
- input에 값이 입력되면 함수가 실행되는 input 이벤트를 설정했습니다.
- `validateEmailInput` 함수를 통해서 입력된 input의 값을 `validateEmail` 함수로 전달합니다.

```js
function validateEmail(email) {
  const isEmailValid = emailReg(email);
  if (!isEmailValid) {
    console.log('이메일 형식이 올바르지 않습니다.');
    emailInput.classList.add('is--invalid');
  } else {
    emailInput.classList.remove('is--invalid');
  }
  return isEmailValid;
}
```

### 로그인 버튼을 클릭

- querySelector로 button에 접근하는 const선언
- 선언된 loginBtn에 클릭시 함수가 실행되는 이벤트를 설정했습니다.

```js
loginBtn.addEventListener('click', loginCheck);
```

### user의 값과 input의 값을 비교하고 모두 일치 한다면 다음 페이지로 이동

- if조건문과 비교 연산자를 통해서 input에 입력된 값이 user의 id,pw와 모두 일치하면 welcome 페이지로 이동합니다.

```js
function loginCheck(event) {
  event.preventDefault();

  if (emailInput.value === user.id && pwInput.value === user.pw) {
    window.location.href = 'welcome.html';
  } else {
    console.log('로그인 실패 - 아이디와 비밀번호가 일치하지 않습니다.');
  }
}
```
