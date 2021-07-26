//왼쪽 화살표와 오른쪽 화살표가 클릭 되었을 때 색깔이 바뀌는 것을 구현
const left_btn = document.querySelector('.left_btn img');
const left_link = '../img/left_btn.svg';
const left_link_hover = '../img/left_btn__hover.svg';

left_btn.addEventListener('mouseover', () => {
    left_btn.setAttribute('src', left_link_hover);
});

left_btn.addEventListener('mouseout', () => {
    left_btn.setAttribute('src', left_link);
});

const right_btn = document.querySelector('.right_btn img');
const right_link = '../img/right_btn.svg';
const right_link_hover = '../img/right_btn_hover.svg';

right_btn.addEventListener('mouseenter', () => {
    right_btn.setAttribute('src', right_link_hover);
});

right_btn.addEventListener('mouseleave', () => {
    right_btn.setAttribute('src', right_link);
});

//login 버튼 클릭시 logn html화면으로 이동한다
const loginBtn = document.querySelector('.login_btn');
loginBtn.addEventListener("click", () => {
    location.href='../html/login.html';
});
//mypage의 경우 login이 된 상태인 경우 
//mypage로 이동하고 아닌 경우 login화면으로 이동한다
//서버로 부터 정보를 얻어온다 (지금은 임시로 true 설정)
const myPage = document.querySelector('.mypage_btn');
let login = true;
myPage.addEventListener("click", () =>{
    login ?
    location.href='../html/myPage.html' :
    location.href='../html/login.html';
});
