export const dataBase = [];
export default class Leaderboard {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  add(dataBase) {
    dataBase.push(this);
  }
}