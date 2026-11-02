const menuButton = document.getElementById('menu-button');
const mainMenu = document.getElementById('main-menu');

menuButton.addEventListener('click', function () {
    mainMenu.classList.toggle('active');
    menuButton.setAttribute('aria-expanded', mainMenu.classList.contains('active'));
});

const currentYear = document.getElementById('current-year');

currentYear.textContent = new Date().getFullYear();
