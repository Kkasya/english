import * as header from '../layout/header';
import create from './createElement';

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
