import * as card from '../components/card';
import { cards } from '../constants/data_cards';
import * as audio from './playSound';
// import * as CONST from '../constants/constants';
import * as header from '../layout/header';

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

export default function openCategory(content) {
    content.addEventListener('click', (e) => {
        if (e.path[1].closest('.card')) {
            removeClass('active-page');
            addClass(e.path[1].innerText, 'active-page');
            document.body.removeChild(content);
            const contentCategory = card.default(randomArray(Object.keys(cards[e.path[1].innerText])), e.path[1].innerText);
            document.body.appendChild(contentCategory);
            e.path[4].children[2].children[1].children[0].innerText = e.path[1].innerText;
            window.addEventListener('click', (el) => audio.default(el, e.path[1].innerText));
        }
         if (header.checkboxSwitcher.checked === false) {
            audio.setPlayRandom(false);
        }
         if (!audio.getPlayRandom()) {
             audio.default(null, e.path[1].innerText);
         }
    });
}
