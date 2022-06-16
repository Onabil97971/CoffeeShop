let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.toggle('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    search.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    search.classList.remove('active');
    navbar.classList.remove('active');
}


let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})