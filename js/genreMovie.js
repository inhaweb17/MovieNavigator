const nav = document.querySelector('nav');

const tabs_index = ["tab0","tab1","tab2","tab3","tab4","tab5","tab6","tab7","tab8","tab9","tab10"];
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

function clickAni(e){
    e.target.animate([
        {transform: 'translateY(-10px)'}
    ],{
        duration: 80
    });
}

nav.addEventListener("click", clickAni);