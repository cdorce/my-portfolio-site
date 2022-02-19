const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', ()=> {
    document.body.classList.toggle('nav-open');
});

navList.forEach( link=> {
    link.addEventListener('click',() => {
        document.body.classList.remove('nav-open')
    })
})