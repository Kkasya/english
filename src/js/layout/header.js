import create from '../utils/createElement';
import * as CONST from '../constants/constants';
import { cards } from '../constants/data_cards';
import * as card from '../components/card';
import * as audio from '../utils/playSound';
import * as category from '../utils/category';
import * as playGame from '../utils/playGame';

const srcBtnGame = `${CONST.iconBase}/${CONST.imgGame}.png`;
const srcBtnRepeat = `${CONST.iconBase}/${CONST.imgRepeat}.svg`;

const check = create('input', '', null, null, ['type', 'checkbox']);
const checkMenu = create('div', 'menu-toggle', [
    check,
    create('span'),
]);

const menu = create('div', 'menu');
const itemMenu = create('li', '', [
    create('img', '', null, null, ['src', `${CONST.iconBase}/icon.png`]),
    create('span', '', 'Main'),
]);
const menuUl = create('ul', '', itemMenu);
const categories = [];

Object.keys(cards).forEach((key) => {
    categories.push(key);
    const menuLi = create('li', '', [
        create('img', '', null, null, ['src', `${CONST.iconCategoryBase}/${key}.png`]),
        create('span', '', key),
    ]);
    menuUl.appendChild(menuLi);
});
menu.appendChild(menuUl);
export const checkboxSwitcher = create('input', '', null, null, ['type', 'checkbox']);
checkboxSwitcher.checked = true;
const switcher = create('div', 'switcher', create('label', 'toggle', [
    checkboxSwitcher,
    create('span', 'switch-left', CONST.TRAIN),
    create('span', 'switch-right', CONST.PLAY),
]));

export const btnGame = create('div', 'button start-game-button hidden', create('div', 'start-game', [
    create('img', '', null, null, ['src', srcBtnGame]),
    create('span', '', CONST.STARTBTN),
]));

export const btnGameRepeat = create('div', 'button repeat-button cover', create('img', '', null, null, ['src', srcBtnRepeat]));

const menuTop = create('div', 'menu-top', [create('h1', '', CONST.H1), switcher, btnGame, btnGameRepeat]);
const verticalMenu = create('div', '', [checkMenu, menu]);

function hideMenu() {
    menu.classList.remove('active');
    check.checked = false;
}

function chooseItemMenu(e) {
    if (e.path[1].children[1]) {
        menu.removeEventListener('click', listener);
        hideMenu();

        category.removeClass('active-page');
        const itemMenuSelected = e.path[1].children[1].innerText;
        category.addClass(itemMenuSelected, 'active-page');

        let content;
        document.body.removeChild(document.body.children[3]);
        if (itemMenuSelected === 'Main') {
            content = card.default(Object.keys(cards));
            e.path[5].children[1].children[0].innerText = CONST.H1;
            category.default(content);
        } else {
            content = card.default(category.randomArray(Object.keys(cards[e.path[1].innerText])), itemMenuSelected);
            e.path[5].children[1].children[0].innerText = e.path[1].innerText;
           // audio.setPlayRandom(false);
        }
        document.body.appendChild(content);

        window.addEventListener('click', (el) => audio.default(el, e.path[1].innerText));

         if (btnGame.classList.contains('cover')) {
             audio.setPlayRandom(false);
        }
        if (!audio.getPlayRandom()) {
            audio.default(null, e.path[1].innerText);
        }
    }
}

function listener(e) {
    chooseItemMenu(e);
}

checkMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    verticalMenu.addEventListener('mouseleave', () => hideMenu());
    menu.addEventListener('click', listener);
});

export default function createHeader() {
    itemMenu.classList.add('active-page');
    return create('div', 'header', [verticalMenu, menuTop]);
}

checkboxSwitcher.addEventListener('click', () => {
    playGame.default(btnGame, checkboxSwitcher.checked);
    btnGame.classList.remove('cover');
    btnGameRepeat.classList.add('cover');
});

btnGame.addEventListener('click', () => {
   btnGame.classList.add('cover');
   btnGameRepeat.classList.remove('cover');
   const categoryName = document.querySelector('h1');
   audio.setPlayRandom(false);
   card.setTypeGame(CONST.PLAY);
   console.log(card.getTypeGame());
    document.body.removeChild(document.body.children[3]);

    const content = card.default(category.randomArray(Object.keys(cards[categoryName.innerText])), categoryName.innerText);
    document.body.appendChild(content);
    audio.default(null, categoryName.innerText);
});

btnGameRepeat.addEventListener('click', () => {
   // playGame.default(btnGame, checkboxSwitcher.checked);
});
