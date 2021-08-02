const nav = document.querySelector('nav');

const tabs_index = ["tab0","tab1","tab2","tab3","tab4","tab5","tab6","tab7","tab8","tab9","tab10"];

function clickAni(e){
    e.target.animate([
        {transform: 'translateY(-10px)'}
    ],{
        duration: 80
    });
}

nav.addEventListener("click", clickAni);