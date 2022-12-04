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



const openModalWindow = document.querySelectorAll('[data-modal-target]');

openModalWindow.forEach(item => {
  item.addEventListener('click', () => {
    const modal = document.querySelector(item.dataset.modalTarget);
    openModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  shadowMenuAdd();
  notScrollAdd();
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  shadowMenuRemove();
  notScrollRemove();
}

shadowMenu.addEventListener('click', () => {
  modal.classList.remove('active');
  shadowMenuRemove();
  notScrollRemove();
});

const signIn = document.querySelector('.btn-sign-in');

signIn.addEventListener('click', () => {
  let email = document.querySelector('.input-email');
  let password = document.querySelector('.input-password');

  if (!email.value) alert('Заполните поле "Email"');
  else if (!password.value) alert('Заполните поле "Password"');
  else alert(`Email: ${email.value} \nPassword: ${password.value}`);
});

let registerWord = document.querySelector('.register-word');
const signInBtnFacebook = document.querySelector('.btn-facebook');
const signInBtnGoogle = document.querySelector('.btn-google');
const lines = document.querySelector('.lines');
const forgotPassword = document.querySelector('.forgot-password');
const loginAccount = document.querySelector('.login-account');
const btnSignIn = document.querySelector('.btn-sign-in');
const register = document.querySelector('.register');

registerWord.addEventListener('click', () => {
  popUpSwitch();
});

function logInSwitch() {
  signInBtnFacebook.style.display = 'none';
  signInBtnGoogle.style.display = 'none';
  lines.style.display = 'none';
  forgotPassword.style.display = 'none';
  loginAccount.textContent = 'Create account';
  btnSignIn.textContent = 'Sign Up';
  registerWord.textContent = 'Log in';
  register.textContent = 'Already have an account?';

}

function registerSwitch() {
  signInBtnFacebook.style.display = 'flex';
  signInBtnGoogle.style.display = 'flex';
  lines.style.display = 'flex';
  forgotPassword.style.display = 'flex';
  loginAccount.textContent = 'Log in to your account';
  btnSignIn.textContent = 'Sign In';
  registerWord.textContent = 'Register';
  register.textContent = 'Don\'t have an account?';
}

function popUpSwitch() {
  if (registerWord.textContent == 'Log in') {
    registerSwitch();
  } else {
    logInSwitch();
  }
}