import './sass/style.scss';
import * as header from './js/layout/header';
import * as card from './js/components/card';
import { cards } from './js/constants/data_cards';
import * as category from './js/utils/category';

const content = card.default(Object.keys(cards));
document.body.appendChild(header.default());
document.body.appendChild(content);

category.default(content);

document.addEventListener('click', (e) => {
    if (e.path[0].closest('.rotate')) {
        card.rotateCard(e.path[3]);
    }
});
