import * as create from './createElement';
import * as CONST from '../constants/constants';
import { cards } from '../constants/data_cards';
import * as category from './category';

const audio = create.default('audio', '');
document.body.appendChild(audio);

let playRandom = false;
let checkCard = false;
let arraySounds = [];

// eslint-disable-next-line
let typeGame = CONST.TRAIN;

export function setTypeGame(type) {
    typeGame = type;
}

export function getTypeGame() {
    return typeGame;
}

export function setPlayRandom(play) {
    playRandom = play;
}

export function getPlayRandom() {
    return playRandom;
}

export function setCheckCard(check) {
    checkCard = check;
}

function playSound(srcAudio) {
    audio.src = srcAudio;
    audio.currentTime = 0;
    audio.pause();
    setTimeout(() => audio.play(), 0);
}

function showSmile() {
    window.scrollTo(0, 0);
    const content = document.body.querySelector('.content');
document.body.removeChild(content);
    const smileResultGame = create.default('img', 'result-game show', null, null,
        ['src', './src/assets/images/victory.png']);
    document.body.appendChild(smileResultGame);
        setTimeout(() => {
            window.location.reload();
        }, 4000);
}

export function checkAnswer(el) {
    const categoryName = document.querySelector('h1').innerText;
    if (el.path[3].classList.contains('hover')) {
        if (el.path[3].children[0].children[0].children[1].children[0].innerText === arraySounds[0]) {
            playSound('./src/assets/sounds/right.mp3');
            el.path[3].classList.add('untouchable');
            el.path[3].classList.remove('hover');
            arraySounds.shift();
            setTimeout(() => {
                playSound(`./src/assets/sounds/${categoryName}/${arraySounds[0]}.mp3`);
            }, 1000);
        } else {
            playSound('./src/assets/sounds/error.mp3');
        }
    }
    if (arraySounds.length === 0) {
        setTimeout(() => {
            playSound('./src/assets/sounds/victory.mp3');
            showSmile();
        }, 1000);
    }
}

export default function playCard(el, categoryName) {
        if ((el && el.path[6] && getTypeGame() === CONST.TRAIN) && !el.path[2].classList.contains('turn')
            && !el.target.classList.contains('rotate') && el.path[1].children[1]
            && !el.path[1].children[1].classList.contains('hidden')) {
            if (el.path[3].classList.contains('card')) {
                playSound(`./src/assets/sounds/${categoryName}/${el.path[1].children[1].children[0].innerText}.mp3`);
            } else if (el.path[4].classList.contains('card')) {
                playSound(`./src/assets/sounds/${categoryName}/${el.path[0].innerText}.mp3`);
            }
        } else if (getTypeGame() === CONST.PLAY && !playRandom && (categoryName !== CONST.H1)) {
            setPlayRandom(true);
            arraySounds = category.randomArray(Object.keys(cards[categoryName]));
            playSound(`./src/assets/sounds/${categoryName}/${arraySounds[0]}.mp3`);
        }

    if (checkCard) {
        if (el && el.path[4] && el.path[3].classList.contains('card')) checkAnswer(el);
    }
}

export function repeatSound(categoryName) {
    playSound(`./src/assets/sounds/${categoryName}/${arraySounds[0]}.mp3`);
}
