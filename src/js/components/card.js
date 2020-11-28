import * as CONST from '../constants/constants';
import { cards } from '../constants/data_cards';

import create from '../utils/createElement';

export default function createMain(words, category = null, typeCard = CONST.categories, typeGame = CONST.TRAIN) {
    let imgUrl;
    const srcRotate = `${CONST.imageBase}/${CONST.imgRotate}.svg`;
    const cardsContainer = create('div', 'cards');

    if (typeCard === CONST.categories) {
        imgUrl = `${CONST.imageCategoryBase}`;
        words.forEach((key) => {
            if (typeCard !== CONST.categories) title.appendChild(create('img', 'rotate', null, null, ['src', srcRotate]));

            const card = create('div', 'card', [
                create('img', 'cardImg', null, null, ['src', `${imgUrl}/${key}.jpg`]),
                create('div', 'title-card', create('p', '', key)),
            ]);

            cardsContainer.appendChild(card);
        });
    } else {
        imgUrl = `${CONST.imageBase}/${category}`;

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
    }
    return create('main', 'content', cardsContainer);
}

export function rotateCard(card) {
    card.classList.add('turn');
    card.addEventListener('mouseleave', () => {
        card.classList.remove('turn');
    });
}
