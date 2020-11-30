import * as card from '../components/card';
import * as CONST from '../constants/constants';
import { cards } from '../constants/data_cards';
import * as category from './category';
import * as createElement from './createElement';
import * as header from '../layout/header';

const audio = createElement.default('audio', '');
document.body.appendChild(audio);

let playRandom = false;

export function setPlayRandom(play) {
    playRandom = play;
}

export function getPlayRandom() {
    return playRandom;
}

function playSound(srcAudio) {
    audio.src = srcAudio;
    audio.currentTime = 0;
    audio.pause();
    setTimeout(() => audio.play(), 0);
}

export default function playCard(el, categoryName) {
    console.log(card.getTypeGame() === CONST.PLAY);
    if ((el && card.getTypeGame() === CONST.TRAIN) && !el.path[2].classList.contains('turn') && !el.target.classList.contains('rotate')) {
        if (el.path[3].classList.contains('card')) {
            playSound(`./src/assets/sounds/${categoryName}/${el.path[1].children[1].children[0].innerText}.mp3`);
        } else if (el.path[4].classList.contains('card')) {
            playSound(`./src/assets/sounds/${categoryName}/${el.path[0].innerText}.mp3`);
        }
    } else if (card.getTypeGame() === CONST.PLAY && !playRandom && (categoryName !== CONST.H1)) {
        console.log('playCard');
            setPlayRandom(true);
        const arraySounds = category.randomArray(Object.keys(cards[categoryName]));
        audio.src = `./src/assets/sounds/${categoryName}/${arraySounds[0]}.mp3`;
        audio.currentTime = 0;
        audio.pause();
        audio.play();
    }
}
