import './style.css';
import Leaderboard from './modules/class.js';
import { dataBase } from './modules/class.js';
import displayplayer from './modules/display.js'
import { unsortedList } from './modules/display.js';

const submitBtn = document.getElementById('add');
const refreshBtn = document.getElementById('refresh-button');


submitBtn.addEventListener('click', () => {
    const namePlayer = document.getElementById('inputname').value;
    const scorePlayer = document.getElementById('inputscore').value;
    if (dataBase === null) {
        dataBase = [];
    }
    const index = dataBase.length + 1;
    const leaderboard = new Leaderboard (namePlayer, scorePlayer, index);
    leaderboard.add(dataBase);
    document.location.reload();
    document.preventDefault();
});

refreshBtn.addEventListener('click', () => {
    unsortedList.innerHTML = `${dataBase.name}: ${dataBase.score}`;
    displayplayer();
    dataBase.push(this);
    console.log(dataBase);
});



