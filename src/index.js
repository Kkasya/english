import './sass/style.scss';
import * as CONST from './js/constants/constants';
import * as header from './js/layout/header';
import * as card from './js/components/card';
import * as random from './js/utils/random';
import { cards } from './js/constants/data_cards';

let content = card.default(Object.keys(cards));
document.body.appendChild(header.default());
document.body.appendChild(content);

content.addEventListener('click', (e) => {
    if (e.path[1].closest('.card')) {
        document.body.removeChild(content);
        content = card.default(random.default(Object.keys(cards[e.path[1].innerText])), e.path[1].innerText, CONST.cardsCategory);
        document.body.appendChild(content);
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
