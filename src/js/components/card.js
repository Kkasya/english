import * as CONST from '../constants/constants';
import { cards } from '../constants/data_cards';
import create from '../utils/createElement';
import * as header from '../layout/header';

// eslint-disable-next-line
let typeGame = CONST.TRAIN;

export function setTypeGame(type) {
    typeGame = type;
}

export function getTypeGame() {
    return typeGame;
}

export default function createMain(words, category = null) {
    let imgUrl;
    const srcRotate = `${CONST.imageBase}/${CONST.imgRotate}.svg`;
    const cardsContainer = create('div', 'cards');

    if (!category) {
        imgUrl = `${CONST.imageCategoryBase}`;
        words.forEach((key) => {
            const card = create('div', 'card', [
                create('img', 'cardImg', null, null, ['src', `${imgUrl}/${key}.jpg`]),
                create('div', 'title-card', create('p', '', key)),
            ]);

            cardsContainer.appendChild(card);
        });
    } else {
        imgUrl = `${CONST.imageBase}/${category}`;
        if (header.checkboxSwitcher.checked) {
            words.forEach((key) => {
                const card = create('div', 'card', create('div', 'faces', [
                    create('div', 'front', [
                        create('img', 'cardImg', null, null, ['src', `${imgUrl}/${key}.jpg`]),
                        create('div', 'title-card', [
                            create('p', '', key),
                            create('img', 'rotate', null, null, ['src', srcRotate]),
                        ])]),
                    create('div', 'back', [
                        create('img', 'cardImg', null, null, ['src', `${imgUrl}/${key}.jpg`]),
                        create('div', 'title-card', create('p', '', cards[category][key]))]),
                ]));
                cardsContainer.appendChild(card);
            });
        } else {
            words.forEach((key) => {
                const card = create('div', 'card', create('div', 'faces',
                    create('div', 'front', create('img', 'cardImg cardImgPlay', null, null,
                        ['src', `${imgUrl}/${key}.jpg`]))));
                cardsContainer.appendChild(card);
            });
        }
    }
    return create('main', 'content', cardsContainer);
}

export function rotateCard(card) {
    card.classList.add('turn');
    card.addEventListener('mouseleave', () => {
        card.classList.remove('turn');
    });
}

document.addEventListener('click', (e) => {
    if (e.path[0].closest('.rotate')) {
        rotateCard(e.path[3]);
    }
});
