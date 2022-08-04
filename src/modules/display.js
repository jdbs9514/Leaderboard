import {dataBase} from './class.js'

export const unsortedList = document.getElementById('score-table');

export default () => {
    for (let i = 0; i < dataBase.length; i += 1) {
        const list = document.createElement('li');
        list.classList.add('element');
        list.innerHTML = `${dataBase.name}: ${dataBase.score}`;
        unsortedList.appendChild(list);
    }
}