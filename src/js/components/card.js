import * as CONST from '../constants/constants';
import { cards } from '../constants/data_cards';
import * as create from '../utils/createElement';
import * as getData from '../utils/getData';

export default function createMain(words, category = null) {
    let imgUrl;
    const srcRotate = `${CONST.imageBase}/${CONST.imgRotate}.svg`;
    const cardsContainer = create.default('div', 'cards');

    if (category === 'Difficult words') {
        if (getData.getCheckboxStatus()) {
            words.forEach((word) => {
                const key = Object.keys(word)[0];
                const categoryWord = Object.values(word)[0][1];
                const card = create.default('div', 'card hover', create.default('div', 'faces', [
                    create.default('div', 'front', [
                        create.default('img', 'cardImg', null, null, ['src', `${CONST.imageBase}/${categoryWord}/${key}.jpg`]),
                        create.default('div', 'title-card', [
                            create.default('p', '', key),
                            create.default('img', 'rotate', null, null, ['src', srcRotate]),
                        ])]),
                    create.default('div', 'back', [
                        create.default('img', 'cardImg', null, null, ['src', `${CONST.imageBase}/${categoryWord}/${key}.jpg`]),
                        create.default('div', 'title-card', create.default('p', '', cards[categoryWord][key]))]),
                ]));
                cardsContainer.appendChild(card);
            });
        } else {
            words.forEach((word) => {
                const key = Object.keys(word)[0];
                const categoryWord = Object.values(word)[0][1];
                const card = create.default('div', 'card hover', create.default('div', 'faces',
                    create.default('div', 'front', [create.default('img', 'cardImg cardImgPlay', null, null,
                        ['src', `${CONST.imageBase}/${categoryWord}/${key}.jpg`]),
                        create.default('div', 'title-card hidden', create.default('p', '', key))])));
                cardsContainer.appendChild(card);
            });
        }
    } else if (!category) {
        imgUrl = `${CONST.imageCategoryBase}`;
        words.forEach((key) => {
            const card = create.default('div', 'card', [
                create.default('img', 'cardImg', null, null, ['src', `${imgUrl}/${key}.jpg`]),
                create.default('div', 'title-card', create.default('p', '', key)),
            ]);

            cardsContainer.appendChild(card);
        });
    } else {
        imgUrl = `${CONST.imageBase}/${category}`;
        if (getData.getCheckboxStatus()) {
            words.forEach((key) => {
                const card = create.default('div', 'card hover', create.default('div', 'faces', [
                    create.default('div', 'front', [
                        create.default('img', 'cardImg', null, null, ['src', `${imgUrl}/${key}.jpg`]),
                        create.default('div', 'title-card', [
                            create.default('p', '', key),
                            create.default('img', 'rotate', null, null, ['src', srcRotate]),
                        ])]),
                    create.default('div', 'back', [
                        create.default('img', 'cardImg', null, null, ['src', `${imgUrl}/${key}.jpg`]),
                        create.default('div', 'title-card', create.default('p', '', cards[category][key]))]),
                ]));
                cardsContainer.appendChild(card);
            });
        } else {
            words.forEach((key) => {
                const card = create.default('div', 'card hover', create.default('div', 'faces',
                    create.default('div', 'front', [create.default('img', 'cardImg cardImgPlay', null, null,
                        ['src', `${imgUrl}/${key}.jpg`]),
                        create.default('div', 'title-card hidden', create.default('p', '', key))])));
                cardsContainer.appendChild(card);
            });
        }
    }
    return create.default('main', 'content', cardsContainer);
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
