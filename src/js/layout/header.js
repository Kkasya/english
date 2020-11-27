import create from '../utils/createElement';
import * as CONST from '../constants/constants';
import { cards } from '../constants/data_cards';

const srcBtnGame = `${CONST.iconBase}/${CONST.imgGame}.png`;
const srcBtnRepeat = `${CONST.iconBase}/${CONST.imgRepeat}.png`;

const checkbox = create('div', 'menu-toggle', [
    create('input', '', null, null, ['type', 'checkbox']),
    create('span'),
]);

const menu = create('div', 'menu');
const menuUl = create('ul', '', create('li', '', [
    create('img', '', null, null, ['src', `${CONST.iconBase}/icon.png`]),
    create('span', '', 'Main'),
]));
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
const checkboxSwitcher = create('input', '', null, null, ['type', 'checkbox']);
checkboxSwitcher.checked = true;
const switcher = create('div', 'switcher', create('label', 'toggle', [
        checkboxSwitcher,
        create('span', 'switch-left', CONST.TRAIN),
        create('span', 'switch-right', CONST.PLAY),
    ]));

const btnGame = create('div', 'button start-game-button', create('div', 'start-game', [
    create('img', '', null, null, ['src', srcBtnGame]),
    create('span', '', CONST.STARTBTN),
    ]));

const menuTop = create('div', 'menu-top', [create('h1', '', CONST.H1), switcher, btnGame]);

export default function createHeader() {
    return create('div', 'header', [checkbox, menu, menuTop]);
}
