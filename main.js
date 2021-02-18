'use strict';

const navbar = document.querySelector('#navbar');
const navbarRect = navbar.getBoundingClientRect();

const scrollIntoView = selector => {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: 'smooth',
  });
};

// Make navbar transparent when it is on the top
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
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
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

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', () => {
  const link = '#home';
  scrollIntoView(link);
});

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.projects-contanier');
const projects = document.querySelectorAll('.work__projects');

workBtnContainer.addEventListener('click', event => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (!filter) {
    return;
  }

  // Remove selection from the previous item and select new one
  const selected = document.querySelector('.category__btn.selected');
  selected.classList.remove('selected');
  const target =
    event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('animate-out');

  setTimeout(() => {
    projects.forEach(project => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('animate-out');
  }, 300);
});
