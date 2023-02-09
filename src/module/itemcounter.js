/* eslint-disable import/no-cycle */
import { anidata } from './showList';

const counter = document.querySelector('.anime-title');

const itemCounter = () => {
  if (anidata.length !== 0) {
    counter.innerHTML = `Anime TV shows <span class="shows-tracker">(${anidata.length})</span>`;
  } else {
    counter.innerHTML = 'No shows added';
  }
};

console.log(anidata);

export default itemCounter;
