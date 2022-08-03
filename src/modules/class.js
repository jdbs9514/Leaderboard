export let dataBase = [];
export default class Leaderboard {
    constructor (name, score) {
        this.name = name;
        this.score = score;
    }

    add(dataBase) {
        dataBase.push(this);
    }
}
