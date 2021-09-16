const myinfoList = document.querySelectorAll('.userinfo');
const reviewContent = document.querySelector('reviewContent');
const likeContent = document.querySelector('likeContent');

function getInfo(url ,type){
    url = url + '/' + type
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();

        xhr.onload = () => {
            if (xhr.status == 200){
                resolve(JSON.parse(xhr.response));
            } else{
                reject(new Error(xhr.status));
            }
        };
    });
};

function paintUserinfo(reviewlist){
    let n = len(reviewlist)
    for (let i = 0; i < n; i++){
        let div  = document.createElement('div');
        div.className = 'review';
        div.setAttribute('alt','내가 쓴 리뷰');

        let date = document.createElement('p');
        date.className = 'reviewdate';
        date.setAttribute('alt', '작성날짜');
        date.innerText = reviewlist[i].date;
        div.appendChild(date);

        let title = document.createElement('p');
        title.className = 'reviewtitle';
        title.setAttribute('alt', '영화제목');

        let grade = document.createElement('p');
        grade.className = 'reviewgrade';
        div.appendChild(grade);

        let content = document.createElement('p');
        content.className = 'reviewcontent';
        div.appendChild(content);

        reviewContent.appendChild(div);
    }

}

function paintUserLike (userLike){
    let n = len(userLike);
    for (let i = 0; i < n; i++){
        let div = document.createElement('div');
        div.className = 'like';
        
        let img = document.createElement('img');
        img.className = 'userlikeposter';
        div.appendChild(img);

        let title = document.createElement('p');
        title.className = "userliketitle";
        title.innerText = ''
        div.appendChild('title');

        let button = document.createElement('button');
        button.className = 'likeCancel';
        button.innerText = '취소'
        div.appendChild(button);

        likeContent.appendChild(div);
    }


}

document.addEventListener('DOMContentLoaded', () =>{
    /*my info 정보들 */ 
    userinfo = getinfo(url, info);
    myinfoList.forEach((myinfo, index) => {
        myinfo.innerHTML = userinfo[index]
    });

    /*user review 정보들 */ 

    userReview = getInfo(url, review);
    paintUserinfo(userReview);

    /*내가 좋아요 한 영화들*/

    userLike = getInfo(url, like);
    paintUserLike(userLike);


});