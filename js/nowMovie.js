const movie_list = [
    {
        title: '블랙위도우',
        poster: '../img/movie_poster1.jpg',
        company: '영화제작사',
        plot: '줄거리ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
        actorNm: '영화출현진들1, 출현진2, 출현진3',
        movieGrade: '4.5'
    },
    {
        title: '이스케이프룸2',
        poster: '../img/movie_poster2.jpg',
        company: '영화제작사',
        plot: '줄거리',
        actorNm: '영화출현진들1, 출현진2, 출현진3',
        movieGrade: '4.5'
    },
    {
        title: '스페이스 잼',
        poster: '../img/movie_poster3.jpg',
        company: '영화제작사',
        plot: '줄거리',
        actorNm: '영화출현진들1, 출현진2, 출현진3',
        movieGrade: '4.5'
    },
    {
        title: '발신제한',
        poster: '../img/movie_poster4.jpg',
        company: '영화제작사',
        plot: '줄거리',
        actorNm: '영화출현진들1, 출현진2, 출현진3',
        movieGrade: '4.5'
    },
    {
        title: '오필리아',
        poster: '../img/movie_poster5.jpg',
        company: '영화제작사',
        plot: '줄거리',
        actorNm: '영화출현진들1, 출현진2, 출현진3',
        movieGrade: '4.5'
    }
]

const nowMovie_list = document.querySelector('.nowMovie_list');

const showNow = (nowMovie_list, movie_list) => {
    document.addEventListener('DOMContentLoaded',() =>{
        let count = 1;
        movie_list.forEach(e => {
            let div = document.createElement('div');
            div.classList.add('nowMovie');
            div.innerHTML = `
            <table>
                <tr>
                    <td class="count">${count}</td>
                    <td><img src='${e.poster}'></td>
                    <td class="info">
                        <p>영화 제목${e.title}</p>
                        <p>제작사: ${e.company}</p>
                        <p class="plot">줄거리: ${e.plot}</p>
                        <p>출현진들: ${e.actorNm}</p>
                        <p>영화평점들: ${e.movieGrade}</p>
                    </td>
                </tr>
            </table>
            `;
            nowMovie_list.appendChild(div);
            count += 1;
        })
    })
}

showNow(nowMovie_list, movie_list);