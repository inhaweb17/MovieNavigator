const result_box = document.querySelector('.result_box');

const movieInfo = {
    title: '블랙위도우',
    movieGrade: '4.5',
    runtime: '180분',
    openDt : '2021.03.03',
    company: '디즈니',
    genre: '액션,모험,SF',
    directorNm: '감독명',
    actorNm : '배우명',
    rating: '관람등급',
    plot:"모든 것을 바꾼 그녀의 선택 어벤져스의 운명을 바꾼 블랙 위도우, 그녀의 진짜 이야기가 시작된다!어벤져스의 히어로 블랙 위도우, ‘나타샤 로마노프’ (스칼렛 요한슨)는자신의 과거와 연결된 레드룸의 거대한 음모와 실체를 깨닫게 된다. 상대의 능력을 복제하는 빌런 ‘태스크마스터’와 새로운 위도우들의 위협에 맞서 목숨을 건 반격을 시작하는 ‘나타샤’는 스파이로 활약했던 자신의 과거 뿐 아니라, 어벤져스가 되기 전 함께했던 동료들을 마주해야만 하는데… 폭발하는 리얼 액션 카타르시스! MCU의 새로운 시대를 시작할 첫 액션 블록버스터를 만끽하라!",
    poster:'../img/movie_poster1.jpg',
    movieLike: '385'
}

result_box.innerHTML = `
<img src='${movieInfo.poster}' class="poster">
<div class="movieInfoContainer">
<p>제목: ${movieInfo.title}</p>
<p>제작사: ${movieInfo.company}</p>
<p>개봉일: ${movieInfo.openDt}</p>
<p>장르: ${movieInfo.genre}</p>
<p>관람등급: ${movieInfo.rating}</p>
<p class="plot">줄거리: ${movieInfo.plot}</p>
</div>

`