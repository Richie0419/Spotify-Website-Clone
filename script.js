const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-items');
const body = document.body;

hamburgerMenu.addEventListener('click', () =>{
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');

    if (body.classList.contains('no-scroll')) {
        body.classList.remove('no-scroll');
    } else {
        body.classList.add('no-scroll');
    }
})