import * as card from '../components/card';
import * as category from './category';
import * as constants from '../constants/constants';
import { cards } from '../constants/data_cards';
import * as playSound from './playSound';

export default function startGame(btnGame, checked) {
    const categoryName = document.querySelector('h1');
    const content = document.querySelector('.content');
    if (checked === false) {
        btnGame.classList.remove('hidden');
        card.changeTypeGame(constants.PLAY);
    } else {
        btnGame.classList.add('hidden');
        card.changeTypeGame(constants.TRAIN);
    }
    if (categoryName.innerText !== constants.H1) {
        document.body.removeChild(content);
        const contentCards = card.default(category.randomArray(Object.keys(cards[categoryName.innerText])), categoryName.innerText);
        document.body.appendChild(contentCards);
    }

    playSound.default(null, categoryName.innerText);
}
