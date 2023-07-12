const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const idInput = document.getElementById('userEmail');
const pwInput = document.getElementById('userPassword');
const loginBtn = document.querySelector('.btn-login');

loginBtn.addEventListener('click', loginCheck);

function validateEmail(email) {
  let isEmailValid = emailReg(email);
  if (!isEmailValid) {
    console.log('이메일 형식이 올바르지 않습니다.');
    idInput.classList.add('is--invalid');
  } else {
    idInput.classList.remove('is--invalid');
  }
  return isEmailValid;
}

function validatePassword(password) {
  let isPasswordValid = pwReg(password);
  if (!isPasswordValid) {
    console.log('비밀번호 형식이 올바르지 않습니다.');
    pwInput.classList.add('is--invalid');
  } else {
    pwInput.classList.remove('is--invalid');
  }
  return isPasswordValid;
}

function loginCheck(event) {
  event.preventDefault();

  const userEmail = idInput.value;
  const password = pwInput.value;

  const isUserEmailValid = validateEmail(userEmail);
  const isPasswordValid = validatePassword(password);

  if (isUserEmailValid && isPasswordValid && userEmail === user.id && password === user.pw) {
    window.location.href = 'welcome.html';
  } else {
    console.log('로그인 실패 - 아이디와 비밀번호가 일치하지 않습니다.');
  }
}
