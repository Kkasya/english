export default function getItem(word) {
    return JSON.parse(localStorage.getItem(word));
}

export function setItem(word, key) {
    const res = getItem(word) || {};
    if (res[key]) res[key] += 1;
    else res[key] = 1;
    localStorage.setItem(word, JSON.stringify(res));
}
