const left_btn = document.querySelector('.left_btn img');
const left_link = '../img/left_btn.svg';
const left_link_hover = '../img/left_btn__hover.svg';

left_btn.addEventListener('mouseover', () => {
    left_btn.setAttribute('src', left_link_hover);
});

left_btn.addEventListener('mouseout', () => {
    left_btn.setAttribute('src', left_link);
});

const right_btn = document.querySelector('.right_btn img');
const right_link = '../img/right_btn.svg';
const right_link_hover = '../img/right_btn_hover.svg';

right_btn.addEventListener('mouseenter', () => {
    right_btn.setAttribute('src', right_link_hover);
});

right_btn.addEventListener('mouseleave', () => {
    right_btn.setAttribute('src', right_link);
});
