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

//@ 입력 값이 필요한 input과 button에 변수를 할당
const emailInput = document.getElementById('userEmail');
const pwInput = document.getElementById('userPassword');
const loginBtn = document.querySelector('.btn-login');

//@ 버튼 클릭시 loginCheck 함수 실행
loginBtn.addEventListener('click', loginCheck);

//@ input에 값을 입력하면 함수 실행됨
emailInput.addEventListener('keyup', validateEmailInput);
pwInput.addEventListener('keyup', validatePasswordInput);

//@ input에 입력한 값을 validateEmail로 전달
function validateEmailInput(event) {
  const email = event.target.value; //입력 필드 값에 접근
  validateEmail(email);
}

function validatePasswordInput(event) {
  const password = event.target.value;
  validatePassword(password);
}

//@ 위에서 전달 받은 값을 정규표현식으로 유효성 검사
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

function validatePassword(password) {
  const isPasswordValid = pwReg(password);
  if (!isPasswordValid) {
    console.log('비밀번호 형식이 올바르지 않습니다.');
    pwInput.classList.add('is--invalid');
  } else {
    pwInput.classList.remove('is--invalid');
  }
  return isPasswordValid;
}

//@ input에 입력한 값과 user의 id/pw 일치확인
function loginCheck(event) {
  event.preventDefault();

  if (emailInput.value === user.id && pwInput.value === user.pw) {
    window.location.href = 'welcome.html';
  } else {
    console.log('로그인 실패 - 아이디와 비밀번호가 일치하지 않습니다.');
  }
}
