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
    console.log(rankList);
})
/*
fetch(`${url}?key=${key}&targetDt=${time}`)
.then(function(res){
    return res.json();
})
.then(function(res){
    let rankList = res.boxOfficeResult.dailyBoxOfficeList;
    console.log(rankList);
    
})
*/