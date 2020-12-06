import * as category from './category';
import * as constants from '../constants/constants';
import * as audio from './playSound';
import { cards } from '../constants/data_cards';
import { removeContent } from './getData';

export default function startGame(btnGame, checked, arrayWords = null) {
    const categoryName = document.querySelector('h1');
    if (checked === false) {
        btnGame.classList.remove('hidden');
    } else {
        btnGame.classList.add('hidden');
        audio.setTypeGame(constants.TRAIN);
        audio.setCheckCard(false);
    }

    if (categoryName.innerText !== constants.H1 && categoryName.innerText !== 'Statistics') {
        removeContent();
        let contentCards;
        if (categoryName.innerText === 'Difficult words') {
            contentCards = category.getMainContent(arrayWords.slice(0, 9), 'Difficult words');
        } else contentCards = category.getMainContent(category.randomArray(Object.keys(cards[categoryName.innerText])), categoryName.innerText);
        document.body.appendChild(contentCards);
    }
}
