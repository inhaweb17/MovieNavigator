const movie_list = [
    {
        title: '블랙위도우',
        poster: '../img/movie_poster1.jpg',
        ranking: 1
    },
    {
        title: '이스케이프룸2',
        poster: '../img/movie_poster2.jpg',
        ranking: 2
    },
    {
        title: '스페이스 잼',
        poster: '../img/movie_poster3.jpg',
        ranking: 3
    },
    {
        title: '발신제한',
        poster: '../img/movie_poster4.jpg',
        ranking: 4
    },
    {
        title: '오필리아',
        poster: '../img/movie_poster5.jpg',
        ranking: 5
    },
    {
        title: '꽃다발 같은 사랑을 했다',
        poster: '../img/movie_poster6.jpg',
        ranking: 6
    },
    {
        title: '킬러의 보디가드2',
        poster: '../img/movie_poster7.jpg',
        ranking: 7
    },
    {
        title: '미드나이트',
        poster: '../img/movie_poster8.jpg',
        ranking: 8
    },
    {
        title: '루카',
        poster: '../img/movie_poster9.jpg',
        ranking: 9
    },
    {
        title: '보스베이비2',
        poster: '../img/movie_poster10.jpg',
        ranking: 10
    }
];

const boxoffice_list = document.querySelector('.boxoffice_list');

//영화 포스터 1위 부터 5위까지 보여지기 
const showRanking = (movie_list, boxoffice_list) => {
    const left_btn = document.querySelector('.left_btn');
    const right_btn = document.querySelector('.right_btn');
    const p0 = document.querySelector('.p0');
    const p1 = document.querySelector('.p1');
    const p2 = document.querySelector('.p2');
    const p3 = document.querySelector('.p3');
    const p4 = document.querySelector('.p4');

    const p_list = [p0,p1,p2,p3,p4];
    //p0...p4까지 차례대로 방문해서 img를 저장한다 
    let p_index = [1,2,3,4,5];
    document.addEventListener('DOMContentLoaded', () => {
        for(let i =0; i<5; i++){
            p_list[i].innerHTML = `
            ${movie_list.map( e => 
                `<img src="${e.poster}"
                alt = "${e.title}"
                data-id = "${e.ranking}"
                class = "poster${e.ranking}" />`
            ).join('')}`;
        }
        
        //처음 로드되었을 때 1등 2등 3등 4등 5등 순서대로 표기하기 위해서 zIndex를 활용해서 처리해준다
        for (let i =0; i < 5; i++) {
            p_list[i].querySelector('.poster' + String(p_index[i])).style.zIndex = '999';
        }   
        
    });

    //왼쪽 버튼을 클릭 시 1등 자리에 2등 포스터가 오는 방식이다 
    left_btn.onclick = () => {
        for(let i =0; i <5; i++){
            p_list[i].querySelector('.poster' + String(p_index[i])).style.zIndex = '-1';
            p_index[i] = plus(p_index[i]);
            p_list[i].querySelector('.poster' + String(p_index[i])).style.zIndex = '999';
        }
    }
    //오른쪽 버튼을 클릭 시 1 등 자리에 마지막 등수인 10등 포스터가 오는 방식이다 
    right_btn.onclick = () => {
        for(let i = 0; i <5; i++){
            p_list[i].querySelector('.poster' + String(p_index[i])).style.zIndex = '-1';
            p_index[i] = minus(p_index[i]);
            p_list[i].querySelector('.poster' + String(p_index[i])).style.zIndex = '999';
        }
    }
    //포스터가 총 10등까지 있으므로 10까지 갔을 경우 1로 바꾼다
    function plus(e){
        if (e == 10){
            e = 1;
        }
        else{
            e += 1;
        }
        return e;
    }
    //위와 같은 이유로 1일 경우 10으로 바꾼다 
    function minus(e){
        if (e == 1){
            e = 10;
        }
        else{
            e -= 1;
        }
        return e;
    }
}
showRanking(movie_list, boxoffice_list);