import './sass/style.scss';
import * as CONST from './js/constants/constants';
import * as header from './js/layout/header';
import * as card from './js/components/card';
import * as random from './js/utils/random';
import { cards } from './js/constants/data_cards';

let audio;

let content = card.default(Object.keys(cards));
document.body.appendChild(header.default());
document.body.appendChild(content);

content.addEventListener('click', (e) => {
    if (e.path[1].closest('.card')) {
        document.body.removeChild(content);
        content = card.default(random.default(Object.keys(cards[e.path[1].innerText])), e.path[1].innerText);
        document.body.appendChild(content);
        window.addEventListener('click', (el) => {
            if (!el.path[2].classList.contains('turn')) {
                if (!audio) audio = new Audio();
                if (el.path[3].classList.contains('card')) {
                    audio.src = `./src/assets/sounds/${e.path[1].innerText}/${el.path[1].children[1].children[0].innerText}.mp3`;
                    audio.currentTime = 0;
                    audio.play();
                } else if (el.path[4].classList.contains('card')) {
                    audio.src = `./src/assets/sounds/${e.path[1].innerText}/${el.path[0].innerText}.mp3`;
                    audio.currentTime = 0;
                    audio.play();
                }
            }
        });
    }
});

document.addEventListener('click', (e) => {
    if (e.path[0].closest('.rotate')) {
        card.rotateCard(e.path[3]);
    }
});

const toggle = document.querySelector('.menu-toggle');
const box = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    box.classList.toggle('active');
});
