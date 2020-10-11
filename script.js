
const menuIcon = document.querySelector(".hamburger-bar");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})


const btn = document.querySelector("#btn");
const container = document.querySelector(".container");
const secondContainer = document.querySelector(".second-container");
btn.addEventListener('click', () => {
    container.classList.toggle('block');
    secondContainer.classList.add("appear");
})

const home = document.querySelector('#home');
home.addEventListener('click', () => {
    container.classList.remove('block');
    secondContainer.classList.remove("appear");
})

