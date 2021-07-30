//tab을 클릭했을 때 애니메이션을 적용 
const tabs = document.querySelectorAll('.tab');
const myInfo = document.querySelector('.myInfo');
const review = document.querySelector('.review');
const like = document.querySelector('.like');
const pwd = document.querySelector('.pwd');


tabs.forEach(element => {
    element.addEventListener("click",() => {
        element.animate([
            {transform: 'translateY(-10px)'}
        ], {
            duration: 80
        });
        if(element.classList.contains('tab0')){
            
        }
    })
})