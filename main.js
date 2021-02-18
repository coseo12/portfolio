'use strict';

const navbar = document.querySelector('#navbar');
const navbarRect = navbar.getBoundingClientRect();

const scrollIntoView = selector => {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: 'smooth',
  });
};

document.addEventListener('scroll', () => {
  if (navbarRect.height < window.scrollY) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', event => {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  scrollIntoView(link);
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');

homeContactBtn.addEventListener('click', () => {
  const link = '#contact';
  scrollIntoView(link);
});

// Make home slowly fade to transparent as the window  scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  const opacity = 1 - window.scrollY / homeHeight;
  home.style.opacity = opacity;
});
