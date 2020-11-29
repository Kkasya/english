let audio;
export default function playCard(el, category) {
    if (!el.path[2].classList.contains('turn') && !el.target.classList.contains('rotate')) {
        if (!audio) audio = new Audio();
        if (el.path[3].classList.contains('card')) {
            audio.src = `./src/assets/sounds/${category}/${el.path[1].children[1].children[0].innerText}.mp3`;
            audio.currentTime = 0;
            audio.pause();
            setTimeout(() => audio.play(), 0);
        } else if (el.path[4].classList.contains('card')) {
            audio.src = `./src/assets/sounds/${category}/${el.path[0].innerText}.mp3`;
            audio.currentTime = 0;
            audio.pause();
            setTimeout(() => audio.play(), 200);
        }
    }
}
