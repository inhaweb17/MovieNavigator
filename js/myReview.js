const reviewInfo = [
    {
        reivewIdx : 0,
        reviewContent: '리뷰작성 내용들',
        reviewDate: '2021.07.31.15:34',
        reivewCount: 56,
        movieTitle: '블랙위도우'
    },
    {
        reivewIdx : 1,
        reviewContent: '리뷰작성 내용들',
        reviewDate: '2021.07.31.15:34',
        reivewCount: 56,
        movieTitle: '이스케이프룸'
    },
    {
        reivewIdx : 2,
        reviewContent: '리뷰작성 내용들',
        reviewDate: '2021.07.31.15:34',
        reivewCount: 56,
        movieTitle: '발신제한'
    },
    {
        reivewIdx : 3,
        reviewContent: '리뷰작성 내용들',
        reviewDate: '2021.07.31.15:34',
        reivewCount: 56,
        movieTitle: '오필리아'
    },
    {
        reivewIdx : 4,
        reviewContent: '리뷰작성 내용들',
        reviewDate: '2021.07.31.15:34',
        reivewCount: 56,
        movieTitle: '꽃다발 같은 사랑을 했다'
    },
    {
        reivewIdx : 5,
        reviewContent: '리뷰작성 내용들',
        reviewDate: '2021.07.31.15:34',
        reivewCount: 56,
        movieTitle: '킬러의 보디가드'
    }
];

const tab1 = document.querySelector('.tab1');
const review_list = document.querySelector('.review_list');
console.log(reviewInfo.length);
const showReview = (review_list, reviewInfo) => {

    tab1.addEventListener('click', () => {
        reviewInfo.forEach(e => {
            let div = document.createElement('div');
            div.classList.add('reivew');
            div.innerHTML = `
            <p class='movieTitle'>${e.movieTitle}</p>
            <p class='reviewDate'>${e.reviewDate}</p>
            <p class='reviewContent'>${e.reviewContent}</p>
            <p class='reviewCount'>${e.reivewCount}</p>
            <button class="modify">수정</button>
            <button class="delete">삭제</button>
            `
            review_list.appendChild(div);
        })
    })
}

showReview(review_list, reviewInfo);