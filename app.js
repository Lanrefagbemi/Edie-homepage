const hamburgerMenuBtn = document.querySelector('.menu-btn');
const menuCloseBtn = document.querySelector('.close-btn');
const menuPanel = document.querySelector('.header-nav');

hamburgerMenuBtn.addEventListener('click', ()=> {
    menuPanel.classList.toggle('is-open');
})

menuCloseBtn.addEventListener('click', ()=> {
    menuPanel.classList.remove('is-open');
})