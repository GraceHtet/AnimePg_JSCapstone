import onepiece from '../assets/onepiece.jpg';

const baseUrl = 'https://api.jikan.moe/v4/';

const bodyEl = document.body;
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const infoImg = document.querySelector('.popup-img');
const popupTitle = document.querySelector('.popup-title');
const infoText = document.querySelector('.info');
const broadcast = document.querySelector('.broadcast');
const rating = document.querySelector('.rating');

const aniApi = async () => {
  const api = await fetch(`${baseUrl}top/anime?filter=airing`);
  const { data } = await api.json();
  return data;
};

const popup = async (idArrs) => {
  const api = await aniApi();

  const cmtBtns = document.querySelectorAll('.comment-btn');
  for (let i = 0; i < cmtBtns.length; i += 1) {
    cmtBtns[i].onclick = () => {
      modal.style.display = 'flex';
      bodyEl.classList.add('modal-active');
      api.forEach((each) => {
        if (idArrs[i].aniId === each.mal_id) {
          if (each.title === 'One Piece') {
            infoImg.src = onepiece;
          } else {
            infoImg.src = each.images.jpg.image_url;
          }
          popupTitle.innerText = each.title_english;
          infoText.innerHTML = each.synopsis;
          broadcast.innerHTML = each.broadcast.string;
          rating.innerHTML = each.score;
        }
      });
    };
  }

  closeBtn.onclick = () => {
    modal.style.display = 'none';
    bodyEl.classList.remove('modal-active');
  };
};
export { popup, aniApi };
