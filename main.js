'use strict';

const navbar = document.querySelector('#navbar');
const navbarRect = navbar.getBoundingClientRect();

document.addEventListener('scroll', () => {
  if (navbarRect.height < window.scrollY) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});
