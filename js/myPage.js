//탭을 클릭할 때마다 content변화 시키기 위해서 event들을 들을 곳 
const nav = document.querySelector('nav');

//클릭시 내용이 바뀔 대상들 
const myInfo = document.querySelector('.myInfo');
const review = document.querySelector('.review');
const like = document.querySelector('.like');
const pwd = document.querySelector('.pwd');

//어떤 탭을 눌렀는지 알아내기 위해서 만든 인덱스
const tabs_index = ["tab0", "tab1", "tab2", "tab3"];
const tabs_list = [myInfo, review, like, pwd];
let classes;
let classNum;

function clickFunc(e){
    //tab을 눌렀을 때에 효과를 주기 위해서 clickAni애니메이션 
    clickAni(e.target);
    //tab을 눌렀을 때에 그 class가 
    classes = Object.values(e.target.classList);
    classNum = tabs_index.indexOf(classes[1]);
    
    if (!tabs_list.includes('active')){
        toggleHidden();
        tabs_list[classNum].classList.remove('hidden');
        tabs_list[classNum].classList.add('active');
    }
}

function clickAni(e){
    e.animate([
        {transform: 'translateY(-10px)'}
    ], {
        duration: 80
    });
}

function toggleHidden(){
    tabs_list.forEach(e => {
        if(!e.classList.contains('hidden')){
            e.classList.add('hidden');
            e.classList.remove('active');
        }
    })
}

nav.addEventListener("click", clickFunc)