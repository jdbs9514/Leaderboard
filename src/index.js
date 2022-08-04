import './style.css';
import Leaderboard, { dataBase } from './modules/class.js';
import get from './modules/get.js';
import post from './modules/post.js';
import displayPlayer from './modules/display.js';

const submitBtn = document.getElementById('add');
const refreshBtn = document.getElementById('refresh-button');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const namePlayer = document.getElementById('inputname').value;
  const scorePlayer = document.getElementById('inputscore').value;
  const leaderboard = new Leaderboard(namePlayer, scorePlayer);
  leaderboard.add(dataBase);
  post(namePlayer, scorePlayer);
});

refreshBtn.addEventListener('click', () => {
  dataBase.push(this);
  get();
  displayPlayer(dataBase);
});