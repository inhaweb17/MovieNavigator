const nav = document.querySelector('nav');

const tabs_index = ["tab0","tab1","tab2","tab3","tab4","tab5","tab6","tab7","tab8","tab9","tab10"];

//영화 ㅠㅛ기
const comdeyList = document.querySelector('.comdey_list');
const meloList = document.querySelector*('.melo_list');
const dramaList = document.querySelector('.drama_list');
const historyList = document.querySelector('.history_list');
const mysteryList = document.querySelector('.mystery_list');
const fantasyList = document.querySelector('.fantasy_list');
const documentaryList = document.querySelector('.documentary_list');
const sfList = document.querySelector('.sf_list');
const crimeList = document.querySelector('.crime_list');
const horrorList = document.querySelector('.horror_list');
const actionList = document.querySelector('.action_list');

const mObjectList = [comdeyList, meloList, dramaList, historyList, mysteryList,
fantasyList, documentaryList, sfList, crimeList, horrorList, actionList]


function clickAni(e){
    e.target.animate([
        {transform: 'translateY(-10px)'}
    ],{
        duration: 80
    });
}

//서버에서 포스터 자료들을 받아와서 띄우기 
//현재 구상은 Dom이 로드되었을 때에 영화포스터보이게 하고
//탭을 클릭했을 때 해당 리스트로 스크롤을 이동시킨다
document.addEventListener('DOMContentLoaded',() =>{
    comdeyList.innerHTML = `
    
    `;
})
nav.addEventListener("click", clickAni);