import * as card from '../components/card';
import * as random from './random';
import { cards } from '../constants/data_cards';
import * as audio from './playSound';

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

export default function openCategory(content) {
    content.addEventListener('click', (e) => {
        if (e.path[1].closest('.card')) {
            removeClass('active-page');
            addClass(e.path[1].innerText, 'active-page');
            document.body.removeChild(content);
            const contentCategory = card.default(random.default(Object.keys(cards[e.path[1].innerText])), e.path[1].innerText);
            document.body.appendChild(contentCategory);
            e.path[4].children[1].children[1].children[0].innerText = e.path[1].innerText;
             window.addEventListener('click', (el) => audio.default(el, e.path[1].innerText));
        }
    });
}
