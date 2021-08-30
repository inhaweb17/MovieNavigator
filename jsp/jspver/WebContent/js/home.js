//로그인 로그아웃 상태에 따라서 다른 페이지로 이동한다 

const login = document.querySelector('.log');
//const logout = document.querySelector('.log out');
const userIn = document.querySelector('.user in');
const myPage = document.querySelector('.mypage');

let logInOut = true;

function goLogin () {
    location.href = '../jsp/loginView.html';
}

function goLogout () {
    location.href= '../jsp/mainlist.html';
}

function goUserin (){
    location.href= '../jsp/registerView.html';
}

function goMypage (logInOut) {
    location.href= '../jsp/myPage.html';
}

login.addEventListener("click", goLogin);
//logout.addEventListener("click", goLogout);
userIn.addEventListener("click", goUserin);
myPage.addEventListener("click", goMypage(logInOut));