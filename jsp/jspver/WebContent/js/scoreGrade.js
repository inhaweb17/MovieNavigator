const starContainer = document.querySelector('.starContainer');
const pointContainer = document.querySelector('.pointContainer');
const reviewInput = document.querySelector('.review_input');
const reviewSubmitBtn = document.querySelector('.review_submit');

//별점 최대 개수
const MAX_SCORE = 5;

let state ={
    score: 0
};
let movieGrade;
let starArray = Array(MAX_SCORE).fill();

starArray.forEach(() => {
    const star = document.createElement('i');
    star.className = 'ic-star-empty';
    starContainer.appendChild(star);
})

function calculateScore(e){
    const {width, left} = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const half_score = width / MAX_SCORE / 2;
    return Math.floor(x / half_score + 1 ) / 2;

}

function fillStar(star_index){
    const starList = [...starContainer.children];

    starList.forEach((star,index) => {
        if(star_index > index){
            if(star_index - index === 0.5){
                star.className = 'ic-star-half';
            }else{
                star.className = 'ic-star-full';
            }
        }else{
            star.className = 'ic-star-empty';
        }
    });

    if(star_index > 5){
        state.score = 5;
    }else if(star_index < 0){
        state.score = 0;
    }else{
        state.score = star_index;
    }
    
    pointContainer.innerText = state.score;
    movieGrade = state.score;
}

starContainer.addEventListener('click', (e) => {
    fillStar(calculateScore(e));
});

starContainer.addEventListener('mousemove', (e) => {
    fillStar(calculateScore(e));
});

let reviewObj;
let review;
function getReview(e){
    let reviewContent = reviewInput.value;
    console.log(reviewContent, movieGrade);

    reviewObj = {
        rate : movieGrade,
        text : reviewContent
    };

    const temp = JSON.stringify(reviewObj);
    review = JSON.parse(temp);
    console.log(review);

}


reviewSubmitBtn.addEventListener('click',getReview);


const xhr = new XMLHttpRequest();
xhr.open('POST', '/');
xhr.setRequestHeader('content-type', 'application/json');
xhr.send(review);

xhr.onreadystatechange = () => {
    if(xhr.readyState != XMLHttpRequest.DONE) return;

    if (xhr.state === 200 ){
        consolelog(JSON.parse(xhr.response));
    }else{
        console.error(xhr.status, xhr.statusText);
    }
}