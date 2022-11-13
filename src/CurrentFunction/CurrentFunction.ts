import { functions } from '../BooleanFunctions/functions';
import { getRandomArbitrary } from '../utils/utils';

export function setFunction() {
    const count = Number(localStorage.getItem('var')) || 2;

    const fn = Math.floor(getRandomArbitrary(0, 6));
    localStorage.setItem('currentFunction', `${fn}`);
    (document.getElementById('function') as HTMLImageElement).src = `${functions[count][fn][0]}`;
}
setFunction();
