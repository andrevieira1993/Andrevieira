const menuItems = document.querySelectorAll('nav#mainMenu ul li');
const sections = document.querySelectorAll('section.content-section');
const menuToggle = document.getElementById('menuToggle');
const menuUl = document.querySelector('nav#mainMenu ul');

menuItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();

    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const sectionId = item.querySelector('a').dataset.section;
    sections.forEach(s => s.classList.remove('active'));

    const section = document.getElementById(sectionId);
    section.classList.add('active');
    section.focus();

    menuUl.classList.remove('show');
  });
});

menuToggle.addEventListener('click', () => {
  menuUl.classList.toggle('show');
});
