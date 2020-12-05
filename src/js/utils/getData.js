import * as header from '../layout/header';
import create from './createElement';
// import * as CONST from '../constants/constants';

let toggleSort = true;

export function getCheckboxStatus() {
    return header.checkboxSwitcher.checked;
}

export function getSmiles() {
    const smiles = document.body.querySelector('.smiles');
    if (smiles) {
        smiles.innerHTML = '';
        return smiles;
    }
    return create('div', 'smiles');
}

export function sorting(tbody, e) {
    const rows = [];
    const index = e.path[0].cellIndex;
    const td = e.target;
    const len = tbody.rows.length;
    for (let i = 0; i < len; i += 1) {
        rows[i] = tbody.rows[i];
    }

    if (toggleSort) {
        toggleSort = false;
        td.classList.add('ascend');
    } else {
        toggleSort = true;
        td.classList.add('descend');
    }

    function compareCells(a, b) {
        let aVal = a.cells[index].innerText;
        let bVal = b.cells[index].innerText;

        if (toggleSort) {
            const temp = aVal;
            aVal = bVal;
            bVal = temp;
        }

        if (index === 6) {
            aVal = Number(aVal);
            bVal = Number(bVal);
        }

        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
        return 0;
    }
    rows.sort(compareCells);
    for (let i = 0; i < len; i += 1) {
        tbody.appendChild(rows[i]);
    }
}
