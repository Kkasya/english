import * as create from './createElement';
import * as CONST from '../constants/constants';
import { cards } from '../constants/data_cards';
import * as category from './category';
import * as getData from './getData';

const audio = create.default('audio', '');
document.body.appendChild(audio);
let playRandom = false;
let checkCard = false;
let arraySounds = [];
let errorSmile = 0;

// eslint-disable-next-line
let typeGame = CONST.TRAIN;

export function setTypeGame(type) {
    typeGame = type;
}

export function getTypeGame() {
    return typeGame;
}

export function setErrorSmile(error) {
    errorSmile = error;
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

function showSmile(src) {
    window.scrollTo(0, 0);
    const content = document.body.querySelector('.content');
document.body.removeChild(content);
    const smileResultGame = create.default('img', 'result-game show', null, null,
        ['src', `./src/assets/images/${src}.png`]);
    document.body.appendChild(smileResultGame);
        setTimeout(() => {
            window.location.reload();
        }, 5000);
}

export function checkAnswer(el) {
    const categoryName = document.querySelector('h1').innerText;
    const smiles = document.body.querySelector('.smiles');
    if (el.path[3].classList.contains('hover')) {
        if (el.path[3].children[0].children[0].children[1].children[0].innerText === arraySounds[0]) {
            const rightSmile = create.default('img', 'smile', null, null, ['src', './src/assets/icons/smile-right.png']);
            smiles.appendChild(rightSmile);
            playSound('./src/assets/sounds/right.mp3');
            el.path[3].classList.add('untouchable');
            el.path[3].classList.remove('hover');
            arraySounds.shift();
            setTimeout(() => {
                playSound(`./src/assets/sounds/${categoryName}/${arraySounds[0]}.mp3`);
            }, 1000);
        } else {
            const errorSmiles = create.default('img', 'smile', null, null, ['src', './src/assets/icons/smile-error.png']);
            smiles.appendChild(errorSmiles);
            errorSmile += 1;
            playSound('./src/assets/sounds/error.mp3');
        }
    }
    if (arraySounds.length === 0) {
        setTimeout(() => {
            let src;
            if (!errorSmile) src = 'victory';
            else src = 'losing';
            playSound(`./src/assets/sounds/${src}.mp3`);
            showSmile(src);
        }, 1000);
    }
}

export default function playCard(el) {
    const categoryName = document.body.querySelector('h1').innerText;
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
            const smiles = getData.getSmiles();
            document.body.appendChild(smiles);
        }

    if (checkCard) {
        if (el && el.path[4] && el.path[3].classList.contains('card')) checkAnswer(el);
    }
}

export function repeatSound(categoryName) {
    playSound(`./src/assets/sounds/${categoryName}/${arraySounds[0]}.mp3`);
}
