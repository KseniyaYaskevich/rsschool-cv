// Dark-theme---------------------------

const themeToggle = document.querySelector('.theme-toggle');

const themeToggleOnClick = () => {
  document.body.classList.toggle('dark-theme'); 
};

if (themeToggle) {
  themeToggle.addEventListener('click', themeToggleOnClick);
}

// Menu---------------------------

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

const navToggleOnClick = () => {
  document.body.classList.toggle('_lock');
  navMain.classList.toggle('main-nav--opened');
};

if (navToggle) {
  navToggle.addEventListener('click', navToggleOnClick);
}

// Anchor---------------------------

const headerNav = document.querySelector('.main-nav__list');

const buttonToScroll = function (evt) {
  evt.preventDefault();
  const id = evt.target.getAttribute('href');
  
  if (navMain.classList.contains('main-nav--opened')) {
    document.body.classList.remove('_lock');
    navMain.classList.remove('main-nav--opened');
  }

  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
};

headerNav.addEventListener('click', buttonToScroll);
