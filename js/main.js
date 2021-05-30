document.addEventListener('scroll', (test) => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > window.innerHeight - (window.innerHeight*40/100)) {
        nav.classList.add('change');
    } else {
        nav.classList.remove('change');
    }
})

const menuBtn = document.getElementById('burger')
const menuList = document.getElementById('burger-list')
let menuOpen = false;
let menuListOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;

        menuList.classList.add('active');
        menuListOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;

        menuList.classList.remove('active');
        menuListOpen = false;
    }
})