import * as card from '../components/card';
import * as CONST from '../constants/constants';
import { cards } from '../constants/data_cards';
import * as category from './category';
import * as createElement from './createElement';

const audio = createElement.default('audio', '');
document.body.appendChild(audio);

let playRandom = false;

export function setPlayRandom(play) {
    playRandom = play;
}

export function getPlayRandom() {
    return playRandom;
}

// export function listenAudio(el, categoryName) {
//     playCard(el, categoryName);
// }
function playSound(srcAudio) {
    audio.src = srcAudio;
    audio.currentTime = 0;
    audio.pause();
    setTimeout(() => audio.play(), 0);
}

export default function playCard(el, categoryName) {
    console.log(`start${categoryName}`);

    if ((el && card.getTypeGame() === CONST.TRAIN) && !el.path[2].classList.contains('turn') && !el.target.classList.contains('rotate')) {
        console.log(`--${categoryName}`);

        if (el.path[3].classList.contains('card')) {
            playSound(`./src/assets/sounds/${categoryName}/${el.path[1].children[1].children[0].innerText}.mp3`);
        } else if (el.path[4].classList.contains('card')) {
            playSound(`./src/assets/sounds/${categoryName}/${el.path[0].innerText}.mp3`);
        }
    } else if (card.getTypeGame() === CONST.PLAY && !playRandom && (categoryName !== CONST.H1)) {
        setPlayRandom(true);
        const arraySounds = category.randomArray(Object.keys(cards[categoryName]));
        audio.src = `./src/assets/sounds/${categoryName}/${arraySounds[0]}.mp3`;
        audio.currentTime = 0;
        audio.pause();
        audio.play();
    }
}
