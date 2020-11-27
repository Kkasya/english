import * as CONST from '../constants/constants';
import create from '../utils/createElement';

export default function createMain(words, category = null, typeCard = CONST.categories, lang = 'en', typeGame = CONST.TRAIN) {
    let imgUrl;
    const cards = create('div', 'cards');
    if (typeCard === CONST.categories) imgUrl = `${CONST.imageCategoryBase}`;
    else imgUrl = `${CONST.imageBase}/${category}`;
    words.forEach((key) => {
        const card = create('div', 'card', [
            create('img', '', null, null, ['src', `${imgUrl}/${key}.jpg`]),
            create('p', '', key),
        ]);
        cards.appendChild(card);
    });
    return create('main', 'content', cards);
}
