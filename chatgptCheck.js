const iconElements = document.querySelectorAll('.navIcons');
const sections = {
  home: document.getElementById('secHome'),
  experience: document.getElementById('secExp'),
  education: document.getElementById('secEdu'),
  portfolio: document.getElementById('secPort'),
  info: document.getElementById('secInfo'),
};

const sectionOffsets = Object.fromEntries(
  Object.entries(sections).map(([key, value]) => [key, value.offsetTop])
);

const scrollTo = curIcon => {
  window.scrollTo({
    top: sectionOffsets[curIcon.dataset.target],
    left: 0,
    behavior: 'smooth',
  });
};

const iconSetActive = curIcon => {
  iconElements.forEach(i => i.classList.remove('active'));
  curIcon.classList.add('fa-lg', 'active');
};

document.addEventListener('click', event => {
  const icon = event.target.closest('.navIcons');
  if (icon) {
    console.log(icon);
    scrollTo(icon);
    iconSetActive(icon);
  }
});

const expArticles = ['graphicDesign', 'container'];

for (let i of expArticles) {
  document.getElementById(i).classList.toggle('hideText', isMobile);
}
