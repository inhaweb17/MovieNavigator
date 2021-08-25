const like_list = [
    {
        title: '블랙 위도우',
        poster: '../img/movie_poster1.jpg'
    },
    {
        title: '이스케이프룸2',
        poster: '../img/movie_poster2.jpg'
    },
    {
        title:'스페이스 잼',
        poster: '../img/movie_poster3.jpg'
    },
    {
        title: '오필리아',
        poster: '../img/movie_poster4.jpg'
    },
    {
        title: '꽃다발 같은 사랑을 했다',
        poster: '../img/movie_poster5.jpg'
    }
]

const tab2 = document.querySelector('.tab2');
const movie_like_list = document.querySelector('.movie_like_list');

const showLike = (like_list, movie_like_list) => {
    tab2.addEventListener('click', () =>{
        like_list.forEach(e => {
            let div = document.createElement('div');
            div.classList.add('like');
            div.innerHTML = `
            <img src='${e.poster}'>
            <p class="title">${e.title}</p>
            `;
            movie_like_list.appendChild(div);
        })
    })
}

showLike(like_list, movie_like_list);