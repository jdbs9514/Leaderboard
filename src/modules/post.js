const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const post = (namePlayer, scorePlayer) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            user: namePlayer,
            score: scorePlayer,
        }),
        headers: {
            'content-type':'application/json; charset=UTF-8',
        },
    });
};

export default post;