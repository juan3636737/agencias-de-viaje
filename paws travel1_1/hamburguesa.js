/*const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});*/
const toggleButton = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

toggleButton.addEventListener("click", () => {
    navList.classList.toggle("active");
});

