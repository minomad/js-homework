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

let idInput = document.getElementById('userEmail');
let pwInput = document.getElementById('userPassword');
let loginBtn = document.querySelector('.btn-login');

loginBtn.addEventListener('click', loginCheck);

function loginCheck(event) {
  let loginId = idInput.value;
  let userId = user.id;
  let password = pwInput.value;
  let userPassword = user.pw;

  let isUserIdValid = loginId === userId;
  let isPasswordValid = password === userPassword;

  if (isUserIdValid && isPasswordValid) {
    setTimeout(function () {
      window.location.href = 'welcome.html';
    }, 0);
  } else {
    console.log('로그인 실패 - 아이디와 비밀번호가 일치하지 않습니다.');
    idInput.classList.add('is--invalid');
    pwInput.classList.add('is--invalid');
  }
}
