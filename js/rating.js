//detail.html에서 별점주기 애니메이션 구현
const stars = document.querySelector('.stars');
const point = document.querySelector('.point');
const submitGrade = document.querySelector('.submitGrade');

const MAX_SCORE = 5; //별은 최대 5개

let state = {
    score: 0
};

let score_list = [];
let starArray = Array(MAX_SCORE).fill();

//별 이미지를 넣을 5개의 div 생성 
starArray.forEach(() => {
    const star = document.createElement('div');
    star.className = 'star empty';
    stars.appendChild(star);
});

//별점 계산 하기 
function calcuateScore(e){
    //getBoundingClientRect()를 사용하여서 뷰포트의 상대적인 위치 알아내기
    const {width, left} = e.currentTarget.getBoundingClientRect();
    //왼쪽 끝 부터 마우스 누른 곳 까지의 길이
    const x = e.clientX - left;
    //별 반개까지 눌렀을 경우 
    const half_score = width / MAX_SCORE / 2;
    //별 개수 반환하기
    return Math.floor(x / half_score + 1) / 2;
}

function fillStar(star_index){
    //현재 star을 담을 div요소들이 담겨있는 배열 
    const starList = [...stars.children];
    //star와 어느 star을 가리키는지 표기한 index
    starList.forEach((star,index) => {
        if(star_index > index){
            if(star_index - index === 0.5){
                star.className = 'star half';
            }else{
                star.className = 'star full';
            }
        }else{
            star.className = 'star empty';
        }
    });
    if(star_index > 5){
        state.score = 5;
    }else{
        state.score = star_index;
    }
    //point표기 하는 곳에 현재 score 나타내기 
    point.innerText  = state.score;
}

//별 클릭했을 때에 event발생
stars.addEventListener('click', (e) => {
    fillStar(calcuateScore(e));
});

//별 위에서 움직였을 때에 별들 채워지기 
stars.addEventListener('mousemove', (e) => {
    fillStar(calcuateScore(e));
});

//mouse 떠났을 때에 
stars.addEventListener('mouseleave', (e) => {
    fillStar(calcuateScore(e));
    point.textContent = state.score;
});

