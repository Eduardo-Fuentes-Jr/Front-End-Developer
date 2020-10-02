const menuIcon = document.querySelector(".hamburger-bar");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})