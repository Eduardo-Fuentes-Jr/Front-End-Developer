
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

const about = document.getElementById('about');

about.addEventListener('click', function() {
    secondContainer.classList.add("appear");
    container.classList.add('block');
    const aboutSection = document.querySelector('.about-section');
    aboutSection.scrollIntoView();
})

const skills = document.getElementById('skills');

skills.addEventListener('click', function(){
    secondContainer.classList.add("appear");
    container.classList.add('block');
    const skillsSection = document.querySelector('.skills-section');
    skillsSection.scrollIntoView();
})

const portfolio = document.getElementById('portfolio');

portfolio.addEventListener('click', function() {
    secondContainer.classList.add("appear");
    container.classList.add('block');
    const portfolioSection = document.querySelector('.portfolio-section');
    portfolioSection.scrollIntoView();
})