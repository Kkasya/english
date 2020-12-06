import * as card from '../components/card';
import { cards } from '../constants/data_cards';
import * as audio from './playSound';
import * as header from '../layout/header';
import { removeContent } from './getData';

export function removeClass(classRemoved) {
    const activeItemMenu = document.querySelector(`.${classRemoved}`);
    activeItemMenu.classList.remove(classRemoved);
}

export function addClass(item, classAdded) {
    const arrItemsMenu = document.querySelectorAll('li');
    arrItemsMenu.forEach((li) => {
        if (li.innerText === item) li.classList.add(classAdded);
    });
}

export function randomArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // eslint-disable-next-line no-param-reassign
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export function listenerCategory(el) {
    audio.default(el);
}

export default function openCategory(content) {
    content.addEventListener('click', (e) => {
        window.removeEventListener('click', listenerCategory);
        if (e.path[1].closest('.card')) {
            removeClass('active-page');
            addClass(e.path[1].innerText, 'active-page');
            removeContent();
            const contentCategory = card.default(randomArray(Object.keys(cards[e.path[1].innerText])), e.path[1].innerText);
            document.body.appendChild(contentCategory);
            e.path[4].children[2].children[1].children[0].innerText = e.path[1].innerText;
            window.addEventListener('click', listenerCategory);

            if (header.btnGame.classList.contains('cover')) {
                audio.setPlayRandom(false);
            }
            if (!audio.getPlayRandom()) {
                audio.default(null, e.path[1].innerText);
            }
        }
    });
}

export function getMainContent(words, category = null) {
    return card.default(words, category);
}
