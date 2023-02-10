import cmtCounter from './cmtcounter.js';

const id = 'T9gppnjGIxWLpYx0BRcZ';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const postComment = async (itemid, name, text) => {
  const action = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${itemid}`,
      username: `${name}`,
      comment: `${text}`,
    }),
  };
  await fetch(`${baseUrl}${id}/comments`, action).then((res) => res.status);
};

const commentAction = async (idArrs) => {
  const form = document.querySelector('form');
  const name = document.querySelector('#name');
  const cmt = document.querySelector('#cmt');
  const cmtCount = document.querySelector('.cmt-count');

  let date = new Date().getDate();
  const year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  if (date < 10) date = `0${date}`;
  if (month < 10) month = `0${month}`;
  const curDate = `${year}-${month}-${date}`;

  const cmtList = document.querySelector('.comment-list');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (name.value !== '' && cmt.value !== '') {
      postComment(idArrs.aniId, name.value, cmt.value);
      if (cmtList.innerHTML === '<i>There is no comment, yet....</i>') {
        cmtList.innerHTML = '';
        cmtList.style.textAlign = 'left';
        cmtList.innerHTML += `
            <li>
              <span>${curDate}</span>
              <span>${name.value}:</span>
              <span>"${cmt.value}"</span>
            </li>`;
      } else {
        const lastLi = cmtList.lastElementChild;
        lastLi.insertAdjacentHTML(
          'afterend',
          `
          <li>
            <span>${curDate}</span>
            <span>${name.value}:</span>
            <span>"${cmt.value}"</span>
          </li>`,
        );
      }

      let num = +cmtCount.textContent;
      num += 1;
      cmtCount.textContent = `${num}`;
      name.value = '';
      cmt.value = '';
    }
  });

  // cmtCounter(cmtList);
};

const showComments = async (idArrs) => {
  const cmtApi = await fetch(
    `${baseUrl}${id}/comments?item_id=${idArrs.aniId}`,
  );
  const result = await cmtApi.json();
  const status = await cmtApi.status;

  const cmtList = document.querySelector('.comment-list');
  if (status === 400) {
    cmtList.style.textAlign = 'center';
    cmtList.innerHTML = '<i>There is no comment, yet....</i>';
  } else {
    cmtList.innerHTML = '';
    result.forEach((data) => {
      const li = document.createElement('li');
      const cmtDate = document.createElement('span');
      cmtDate.innerText = data.creation_date;
      const cmter = document.createElement('span');
      cmter.innerText = `${data.username}:`;
      const cmtText = document.createElement('span');
      cmtText.innerText = `"${data.comment}"`;
      li.append(cmtDate, cmter, cmtText);
      cmtList.appendChild(li);
    });
  }

  cmtCounter(cmtList);
};

export { commentAction, showComments };
