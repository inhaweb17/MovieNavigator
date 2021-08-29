const url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
const key = '08fe9327eb466a04a4592345c7c94ee0';


// 현재날짜구하기 
let now = new Date();
let time = (function() {
    let m = String(now.getMonth() + 1);
    if(m <10){
        m = '0' + m;
    }
    return String(now.getFullYear()) + m + String(now.getDate() - 1);
    
})();

//api로 부터 정보 받아오기 
//데이터 구조 (사용할 것 만 표기)
/* dailyBoxOfficeList : [
    {
        "rnum" : '1',
        "rrank" : '1',
        "movieCd": '20196270',
        "movieNm" : '싱크홀'
    }, ... 10등까지 존재 
]
*/ 
const reqRank =
fetch(`${url}?key=${key}&targetDt=${time}`);
reqRank.then(res => {
    if(res.status >= 200 && res.status < 300){
        return res.json();
    }else{
        return Promise.reject(new Error('rank api error'));
    }
})
.then(res=> {
    let rankList =res.boxOfficeResult.dailyBoxOfficeList;
    showRanking(rankList);
    console.log(rankList);
    
})

//표기할 element들 

const leftBtn = document.querySelector('.left_btn');
const rightBtn = document.querySelector('.right_btn');
const p0 = document.querySelector('.p0');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');


const posterList = [p0, p1, p2, p3];
let p_index = [0,1,2,3];

const showRanking = (rankList) => {
    
    for(let i = 0; i <posterList.length; i ++){
        posterList[i].innerHTML = `
        <img src='#'
        alt = '${rankList[i].movieNm}${rankList[p_index[i]].rank}st'
        class = 'poster${rankList[i].rank}' />
        `
    };

    leftBtn.onclick = () => {
        for(let i = 0; i< 4; i++){
            p_index[i] = plus(p_index[i]);
        }
        for(let i = 0; i< 4; i++){
            posterList[i].innerHTML = `
            <img src="#"
            alt = '${rankList[p_index[i]].movieNm}${rankList[p_index[i]].rank}st'
            class = 'poster${rankList[p_index[i]].rank}' />
            `
        }
    }

    rightBtn.onclick = () => {
        for(let i =0; i<4; i++) {
            p_index[i] = minus(p_index[i]);
        }
        for(let i =0; i< 4; i++){
            posterList[i].innerHTML = `
            <img src="#"
            alt = '${rankList[p_index[i]].movieNm}${rankList[p_index[i]].rank}st'
            class = 'poster${rankList[p_index[i]].rank}' />
            `
        }
    }

    function plus(e) {
        if (e == 9) {
            e = 0;
        }else {
            e += 1;
        }
        return e;
    }

    function minus(e) {
        if (e == 0){
            e = 9;
        }else {
            e -= 1;
        }
        return e;
    }

}