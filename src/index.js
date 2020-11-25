import './sass/style.scss';

const toggle = document.querySelector('.menu-toggle');
const box = document.querySelector('.menu');
console.log(toggle);

toggle.addEventListener('click', () => {
    console.log(toggle);
    box.classList.toggle('active');
});
