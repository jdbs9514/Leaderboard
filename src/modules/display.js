
import { dataBase } from "./class.js";

export const unsortedList = document.getElementById('score-table');

export default () => {
    
    for(let i = 0; i < dataBase.length; i += 1) {
        const list = document.createElement('li');
        list.id = i + 1;
        list.value = dataBase[i].name;
        list.value = dataBase[i].score;
        unsortedList.appendChild(list);
    }
}