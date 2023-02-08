const id = 'T9gppnjGIxWLpYx0BRcZ';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const actions = JSON.parse(localStorage.getItem('actions')) || [];

const postLike = async (num) => {
  const action = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${num}`,
    }),
  };
  await fetch(`${baseUrl}${id}/likes`, action).then((res) => res.status);
};

const likeAction = async (idArrs) => {
  const likeBtns = document.querySelectorAll('.likes-btn');
  likeBtns.forEach((like, idx) => {
    like.addEventListener('click', () => {
      if (!like.className.includes('liked')) {
        postLike(idArrs[idx].aniId);
        like.classList.add('liked');
        actions.push({
          id: `${idArrs[idx].aniId}`,
          liked: true,
        });
        localStorage.setItem('actions', JSON.stringify(actions));
      }
    });
  });
};

const showLikes = async (idArrs) => {
  const likeApi = await fetch(`${baseUrl}${id}/likes`).then((res) => res.json());

  const likeCounts = document.querySelectorAll('.likes-count');
  likeCounts.forEach((like, idx) => {
    likeApi.forEach((data) => {
      if (+data.item_id === idArrs[idx].aniId) {
        like.innerText = data.likes;
      }
    });
  });
};

export { likeAction, showLikes };
