'use strict';

let windowWidth = window.matchMedia('(max-width: 700px)');

// DOM ELEMENTS

const btnPortSwitch = document.querySelector('.portSwitch');
const btnGoToPort = document.getElementById('btnPort');
const btnInsta = document.getElementById('btnInsta');
const btnShowMore = document.querySelectorAll('.btnShowMore');

const iconHome = document.getElementById('home');
const iconExperience = document.getElementById('experience');
const iconEducation = document.getElementById('education');
const iconPortfolio = document.getElementById('portfolio');
const iconInfo = document.getElementById('info');
const iconElements = document.querySelectorAll('.navIcons');

const headers = document.getElementById('header1');

const expArticles = ['graphicDesign', 'caption', 'skills'];

const spaceGraphic = document.getElementById('graDesign');
const expGraphic = document.getElementById('graphicDesign');
const expContainer = document.getElementById('divExp');
const information = document.querySelectorAll('.information');

const sections = {
  home: document.getElementById('secHome'),
  experience: document.getElementById('secExp'),
  education: document.getElementById('secEdu'),
  portfolio: document.getElementById('secPort'),
  info: document.getElementById('secInfo'),
};

const port1El = document.getElementById('port1');
const port2El = document.getElementById('port2');

const scroller = document.querySelector('.scroller');

// FUNCTIONS

function mediaQuery(x) {
  const isMobile = x.matches;

  information[2].classList.toggle('skills', !isMobile);
  expContainer.classList.toggle('secExp', !isMobile);
  expContainer.classList.toggle('mobileSecExp', isMobile);

  for (let i of btnShowMore) {
    const el = i;
    if (el !== null) {
      el.classList.toggle('hidden', !isMobile);
    }
  }

  for (let i of expArticles) {
    const el = document.getElementById(i);
    console.log(el);
    if (el !== null) {
      el.classList.toggle('hideText', isMobile);
    }
  }
}

const sectionOffsets = Object.fromEntries(
  Object.entries(sections).map(([key, value]) => [key, value.offsetTop])
);

mediaQuery(windowWidth);

const scrollTo = curIcon => {
  const scrollId = curIcon.id;
  window.scrollTo({
    top: sectionOffsets[scrollId],
    left: 0,
    behavior: 'smooth',
  });
};

const showMore = curIcon => {
  const showId = curIcon.id;

  if (showId === 'moreExp') {
    const sec = document.getElementById('graphicDesign');
    sec.classList.toggle('hideText');
  } else {
    const sec = document.getElementById('caption');
    sec.classList.toggle('hideText');
  }
};

const iconSetActive = curIcon => {
  iconElements.forEach(i => i.classList.remove('active'));
  curIcon.classList.add('fa-lg', 'active');
};

const portSwitch = () => {
  port1El.classList.toggle('showPort');
  port1El.classList.toggle('hidePort');
  port2El.classList.toggle('showPort');
  port2El.classList.toggle('hidePort');
};

// EVENT LISTENERS

windowWidth.addEventListener('change', mediaQuery);

window.addEventListener('scroll', () => {
  const value = window.scrollY;
  let activeIcon;

  if (value >= 0 && value <= 200) {
    activeIcon = iconHome;
  } else if (value > 600 && value <= 1000) {
    activeIcon = iconExperience;
  } else if (value > 1500 && value <= 2000) {
    activeIcon = iconEducation;
  } else if (value > 2400 && value <= 3000) {
    activeIcon = iconPortfolio;
  } else if (value > 3300 && value <= 3650) {
    activeIcon = iconInfo;
  }

  if (activeIcon) {
    iconSetActive(activeIcon);
  }
});

document.addEventListener('click', event => {
  const icon = event.target.closest('.navIcons');
  if (icon) {
    scrollTo(icon);
  }
});

document.addEventListener('click', event => {
  const btn = event.target.closest('.btnShowMore');
  if (btn) {
    showMore(btn);
  }
});

btnGoToPort.addEventListener('click', () => {
  scrollTo(portfolio);
});

btnPortSwitch.addEventListener('click', () => {
  requestAnimationFrame(portSwitch);
});

btnInsta.addEventListener('mousedown', event => {
  if (event.button === 1) {
    // check if middle mouse button is clicked
    window.open('https://www.instagram.com/michaelk.designs/', '_blank');
  }
});
