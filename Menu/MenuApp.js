const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    dropdown.addEventListener('mouseenter', () => {
        dropdownMenu.style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdownMenu.style.display = 'none';
    });
});

