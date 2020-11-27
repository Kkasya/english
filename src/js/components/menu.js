const toggle = document.querySelector('.menu-toggle');
const box = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    box.classList.toggle('active');
});
