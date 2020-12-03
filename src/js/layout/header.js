import create from '../utils/createElement';
import * as CONST from '../constants/constants';
import { cards } from '../constants/data_cards';
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
const menuStat = create('li', '', [
    create('img', '', null, null, ['src', `${CONST.iconCategoryBase}/Statistics.png`]),
    create('span', '', 'Statistics'),
]);
menuUl.appendChild(menuStat);
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

const btnRepeatWords = create('div', 'button statistic-button', create('span', '', 'Repeat difficult words'));
const btnReset = create('div', 'button statistic-button', create('span', '', 'Reset'));

const tr = [];

Object.keys(cards).forEach((categoryCard) => {
    Object.keys(cards[categoryCard]).forEach((key) => {
        const categoryT = create('td', categoryCard, categoryCard);
        const word = create('td', '', key);
        const translate = create('td', '', cards[categoryCard][key]);
        const trTable = create('tr', 'tr-table', [categoryT, word, translate]);
        tr.push(trTable);
    });
});

const statistics = create('div', 'statistics', [
    create('div', 'btnStatic', [btnRepeatWords, btnReset]),
    create('div', 'table', [
        create('tr', 'table-header', [
            create('td', '', 'Category'),
            create('td', '', 'Word'),
            create('td', '', 'Translation'),
            create('td', '', 'Clicks'),
            create('td', '', 'Correct'),
            create('td', '', 'Wrong'),
            create('td', '', '%'),
            ]), ...tr])]);

function hideMenu() {
    menu.classList.remove('active');
    check.checked = false;
}

function chooseItemMenu(e) {
    if (e.path[1].children[1] && (!e.path[1].children[1].classList.contains('menu'))) {
        menu.removeEventListener('click', listener);
        hideMenu();
        category.removeClass('active-page');
        const itemMenuSelected = e.path[1].children[1].innerText;
        category.addClass(itemMenuSelected, 'active-page');

        let content = document.body.querySelector('.content');
        if (!content) content = document.body.querySelector('.statistics');
        document.body.removeChild(content);
        if (itemMenuSelected === 'Main') {
            content = category.getMainContent(Object.keys(cards));
            e.path[5].children[1].children[0].innerText = CONST.H1;
            category.default(content);
            audio.setErrorSmile(0);
            const smiles = document.body.querySelector('.smiles');
            if (smiles) {
                smiles.innerHTML = '';
            }
        } else if (itemMenuSelected === 'Statistics') {
            content = statistics;
            e.path[5].children[1].children[0].innerText = itemMenuSelected;
        } else {
            content = category.getMainContent(category.randomArray(Object.keys(cards[itemMenuSelected])), itemMenuSelected);
            e.path[5].children[1].children[0].innerText = itemMenuSelected;
        }
        document.body.appendChild(content);

        if (btnGame.classList.contains('cover')) {
            audio.setPlayRandom(false);
        }
        if (!audio.getPlayRandom() && (itemMenuSelected !== 'Main')) {
            audio.default(null, itemMenuSelected);
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
    audio.setErrorSmile(0);
    btnGame.classList.remove('cover');
    btnGameRepeat.classList.add('cover');
    const smiles = document.body.querySelector('.smiles');
    if (smiles) {
        smiles.innerHTML = '';
        return smiles;
    }
});

btnGame.addEventListener('click', () => {
    btnGame.classList.add('cover');
    btnGameRepeat.classList.remove('cover');
    audio.setCheckCard(true);
    audio.setTypeGame(CONST.PLAY);
    const categoryName = document.querySelector('h1');
    if (categoryName.innerText !== CONST.H1 && categoryName.innerText !== 'Statistics') {
        audio.setPlayRandom(false);
        let content = document.body.querySelector('.content');
        document.body.removeChild(content);
        content = category.getMainContent(category.randomArray(Object.keys(cards[categoryName.innerText])), categoryName.innerText);
        document.body.appendChild(content);
        audio.default(null, categoryName.innerText);
    }
});

btnGameRepeat.addEventListener('click', () => {
    const categoryName = document.querySelector('h1');
    audio.repeatSound(categoryName.innerText);
});
