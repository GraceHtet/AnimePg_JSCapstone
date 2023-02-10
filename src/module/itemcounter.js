/* eslint-disable import/no-cycle */
import { anidata } from './showList.js';

const itemCounter = () => {
  const counter = document.querySelector('.anime-title');
  if (anidata.length !== 0) {
    counter.innerHTML = `Anime TV shows <span class="shows-tracker">(${anidata.length})</span>`;
  } else {
    counter.innerHTML = 'No shows added';
  }
};

export default itemCounter;
