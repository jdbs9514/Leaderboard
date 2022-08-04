import displayPlayer from './display.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const get = () => {
    fetch(url)
    .then(async(response) => {
        const data = await response.json();
        const scoreData = data.result;
        return scoreData;
    })

    .then((scoreData) => {
        scoreData.forEach(displayPlayer);
    });
};

export default get;