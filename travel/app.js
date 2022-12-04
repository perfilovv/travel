<<<<<<< HEAD
<<<<<<< HEAD
const burgerItem = document.querySelector('.burger');
const popMenu = document.querySelector('.nav');
const closeMenu = document.querySelector('.nav-close');
const shadowMenu = document.querySelector('.menu-shadow');
const notScroll = document.querySelector('body');
=======
(function () {
  const burgerItem = document.querySelector('.burger');
  const popMenu = document.querySelector('.nav');
  const closeMenu = document.querySelector('.nav-close');
  const shadowMenu = document.querySelector('.menu-shadow');
  const notScroll = document.querySelector('body');
>>>>>>> parent of a15c9ae (Merge pull request #12 from perfilovv/travel)

  const popMenuAdd = () => popMenu.classList.add('nav-active');
  const shadowMenuAdd = () => shadowMenu.classList.add('menu-shadow-active');
  const notScrollAdd = () => notScroll.classList.add('not-scroll');

  const popMenuRemove = () => popMenu.classList.remove('nav-active');
  const shadowMenuRemove = () => shadowMenu.classList.remove('menu-shadow-active');
  const notScrollRemove = () => notScroll.classList.remove('not-scroll');

  burgerItem.addEventListener('click', () => {
    popMenuAdd();
    shadowMenuAdd();
    notScrollAdd();
  });

  closeMenu.addEventListener('click', () => {
    popMenuRemove();
    shadowMenuRemove();
    notScrollRemove();
  });

  shadowMenu.addEventListener('click', () => {
    popMenuRemove();
    shadowMenuRemove();
    notScrollRemove();
  });

  function closeNav() {
    popMenuRemove();
    shadowMenuRemove();
    notScrollRemove();
  }
<<<<<<< HEAD
}
=======
(function () {
  const burgerItem = document.querySelector('.burger');
  const popMenu = document.querySelector('.nav');
  const closeMenu = document.querySelector('.nav-close');
  const shadowMenu = document.querySelector('.menu-shadow');
  const notScroll = document.querySelector('body');

  const popMenuAdd = () => popMenu.classList.add('nav-active');
  const shadowMenuAdd = () => shadowMenu.classList.add('menu-shadow-active');
  const notScrollAdd = () => notScroll.classList.add('not-scroll');

  const popMenuRemove = () => popMenu.classList.remove('nav-active');
  const shadowMenuRemove = () => shadowMenu.classList.remove('menu-shadow-active');
  const notScrollRemove = () => notScroll.classList.remove('not-scroll');

  burgerItem.addEventListener('click', () => {
    popMenuAdd();
    shadowMenuAdd();
    notScrollAdd();
  });

  closeMenu.addEventListener('click', () => {
    popMenuRemove();
    shadowMenuRemove();
    notScrollRemove();
  });

  shadowMenu.addEventListener('click', () => {
    popMenuRemove();
    shadowMenuRemove();
    notScrollRemove();
  });

  function closeNav() {
    popMenuRemove();
    shadowMenuRemove();
    notScrollRemove();
  }

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((elements) => elements.addEventListener('click', closeNav));
}());
>>>>>>> parent of a5b4169 (Merge branch 'travel-part3' of https://github.com/perfilovv/travel into travel-part3)
=======

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((elements) => elements.addEventListener('click', closeNav));
}());
>>>>>>> parent of a15c9ae (Merge pull request #12 from perfilovv/travel)
