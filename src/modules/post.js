const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/e18e3b80-1444-11ed-a409-1d4b1265a290/scores';

const post = (namePlayer, scorePlayer) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: namePlayer,
      score: scorePlayer,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default post;