import * as card from '../components/card';
import * as random from './random';
import { cards } from '../constants/data_cards';
import * as audio from './playSound';

export default function openCategory(content) {
    content.addEventListener('click', (e) => {
        if (e.path[1].closest('.card')) {
            document.body.removeChild(content);
            content = card.default(random.default(Object.keys(cards[e.path[1].innerText])), e.path[1].innerText);
            document.body.appendChild(content);
            e.path[4].children[1].children[1].children[0].innerText = e.path[1].innerText;
            window.addEventListener('click', (el) => audio.default(e, el));
        }
    });
}
