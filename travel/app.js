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

const slider = document.querySelector('.destination-slider');
const btnPrev = document.querySelector('.arrow-left');
const btnNext = document.querySelector('.arrow-right');
const ellipse = document.querySelectorAll('.ellipse');
const sliderItems = document.querySelectorAll('.destination');

let indexSliders = 1;
function ellipseActive() {
  ellipse[indexSliders].classList.add('ellipse-active');
}
ellipseActive();

function ellipseNotActive() {
  ellipse[indexSliders].classList.remove('ellipse-active');
}

window.addEventListener('resize', function () {
  if (document.documentElement.clientWidth < 391) {
    ellipseNotActive();
    indexSliders = 0;
    ellipseActive();
  } else {
    ellipseNotActive();
    indexSliders = 1;
    ellipseActive();
  }
});

if (window.innerWidth < 391) {
  ellipseNotActive();
  indexSliders = 0;
  ellipseActive();
}

btnPrev.addEventListener('click', movePrev);
btnNext.addEventListener('click', moveNext);


function movePrev() {
  const createItem = document.createElement('div');
  createItem.className = 'destination';
  createItem.innerHTML = slider.lastElementChild.innerHTML;
  slider.insertBefore(createItem, slider.firstElementChild);

  slider.classList.add('slider-left');

  btnPrev.removeEventListener('click', movePrev);
  btnNext.removeEventListener('click', moveNext);

  ellipse.forEach(() => {
    ellipseNotActive();
  });
  if (--indexSliders === -1) {
    indexSliders = sliderItems.length - 1;
  }
  ellipseActive();
}

function moveNext() {
  const createItemOne = document.createElement('div');
  createItemOne.className = 'destination';
  createItemOne.innerHTML = slider.firstElementChild.innerHTML;
  slider.appendChild(createItemOne);

  slider.classList.add('slider-right');

  btnPrev.removeEventListener('click', movePrev);
  btnNext.removeEventListener('click', moveNext);

  ellipse.forEach(() => {
    ellipseNotActive();
  });
  if (++indexSliders === sliderItems.length) {
    indexSliders = 0;
  }
  ellipseActive();
}

slider.addEventListener('animationend', (e) => {
  btnPrev.addEventListener('click', movePrev);
  btnNext.addEventListener('click', moveNext);

  if (e.animationName === 'move-next') {
    slider.firstElementChild.remove();
    slider.classList.remove('slider-right');
  } else if (e.animationName === 'move-prev') {
    slider.lastElementChild.remove();
    slider.classList.remove('slider-left');
  }
});

