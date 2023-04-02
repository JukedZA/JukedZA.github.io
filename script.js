'use strict';

let port1 = true;
let port2 = false;

// DOM ELEMENTS

const btnPortSwitch = document.querySelector('.portSwitch');
const btnGoToPort = document.getElementById('btnPort');

const iconHome = document.getElementById('home');
const iconExperience = document.getElementById('experience');
const iconEducation = document.getElementById('education');
const iconPortfolio = document.getElementById('portfolio');
const iconInfo = document.getElementById('info');

const home = document.getElementById('secHome');
const exp = document.getElementById('secExp');
const edu = document.getElementById('secEdu');
const port = document.getElementById('secPort');
const info = document.getElementById('secInfo');

const port1El = document.getElementById('port1');
const port2El = document.getElementById('port2');

const scroller = document.querySelector('.scroller');

// FUNCTIONS

const scrollTo = curIcon => {
  window.scrollTo({
    top: curIcon.offsetTop,
    left: 0,
    behavior: 'smooth',
  });
};

const iconSetActive = curIcon => {
  deactivateIcons();
  curIcon.classList.add('fa-lg', 'active');
};

const deactivateIcons = () => {
  const iconArr = [
    iconHome,
    iconExperience,
    iconEducation,
    iconPortfolio,
    iconInfo,
  ];

  iconArr.forEach(i => i.classList.remove('fa-lg', 'active'));
};

const portSwitch = () => {
  port1 = port2;
  port2 = !port1;

  if (port1) {
    port1El.classList.remove('hidePort');
    port1El.classList.remove('hidden');
    port1El.classList.add('showPort');
    port2El.classList.remove('showPort');
    port2El.classList.add('hidePort');
    port2El.classList.add('hidden');
  } else if (port2) {
    port2El.classList.remove('hidePort');
    port2El.classList.remove('hidden');
    port2El.classList.add('showPort');
    port1El.classList.remove('showPort');
    port1El.classList.add('hidePort');
    port1El.classList.add('hidden');
  }
};

// EVENT LISTENERS

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  if (value >= 0 && value <= 200) {
    iconSetActive(iconHome);
  } else if (value > 600 && value <= 1000) {
    iconSetActive(iconExperience);
  } else if (value > 1500 && value <= 2000) {
    iconSetActive(iconEducation);
  } else if (value > 2400 && value <= 3000) {
    iconSetActive(iconPortfolio);
  } else if (value > 3300 && value <= 3650) {
    iconSetActive(iconInfo);
  }
});

iconHome.addEventListener('click', () => {
  scrollTo(home);
});

iconExperience.addEventListener('click', () => {
  scrollTo(exp);
});

iconEducation.addEventListener('click', () => {
  scrollTo(edu);
});

iconPortfolio.addEventListener('click', () => {
  scrollTo(port);
});

iconInfo.addEventListener('click', () => {
  scrollTo(info);
});

btnGoToPort.addEventListener('click', () => {
  scrollTo(port);
});

btnPortSwitch.addEventListener('click', portSwitch);
