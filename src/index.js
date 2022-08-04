import './style.css';
import Leaderboard from './modules/class.js';
import { dataBase } from './modules/class.js';
import get from './modules/get.js';
import post from './modules/post.js';
import { unsortedList } from './modules/display.js';
import displayPlayer from './modules/display.js';


const submitBtn = document.getElementById('add');
const refreshBtn = document.getElementById('refresh-button');
const formAdd = document.getElementById('form-add'); 




submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const namePlayer = document.getElementById('inputname').value;
    const scorePlayer = document.getElementById('inputscore').value;
    const leaderboard = new Leaderboard(namePlayer, scorePlayer);
    leaderboard.add(dataBase);
    document.location.reload();
    post(namePlayer, scorePlayer);
    formAdd.reset();
    
});

refreshBtn.addEventListener('click', () => {
    dataBase.push(this);
    console.log(dataBase);
    displayPlayer();
    unsortedList.innerHTML='';
    get();
});




