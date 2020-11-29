import create from '../utils/createElement';
import * as CONST from '../constants/constants';
import { cards } from '../constants/data_cards';
import * as card from '../components/card';
import * as random from '../utils/random';
import * as audio from '../utils/playSound';
import * as category from '../utils/category';

const srcBtnGame = `${CONST.iconBase}/${CONST.imgGame}.png`;
// const srcBtnRepeat = `${CONST.iconBase}/${CONST.imgRepeat}.png`;

const check = create('input', '', null, null, ['type', 'checkbox']);
const checkMenu = create('div', 'menu-toggle', [
    check,
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
const verticalMenu = create('div', '', [checkMenu, menu]);

function hideMenu() {
    menu.classList.remove('active');
    check.checked = false;
}
checkMenu.addEventListener('click', () => {
    menu.classList.toggle('active');

    verticalMenu.addEventListener('mouseleave', () => hideMenu());

    menu.addEventListener('click', (e) => {
        if (e.path[1].children[1]) {
            hideMenu();
            const itemMenu = e.path[1].children[1].innerText;
            let content;
            document.body.removeChild(document.body.children[2]);
            console.log(itemMenu === 'Main');
            if (itemMenu === 'Main') {
                content = card.default(Object.keys(cards));
                e.path[5].children[1].children[0].innerText = CONST.H1;
                category.default(content);
            } else {
                content = card.default(random.default(Object.keys(cards[e.path[1].innerText])), itemMenu);
                e.path[5].children[1].children[0].innerText = e.path[1].innerText;
            }
            document.body.appendChild(content);
            window.addEventListener('click', (el) => audio.default(e, el));
        }
    });
});

export default function createHeader() {
    return create('div', 'header', [verticalMenu, menuTop]);
}
