import onepiece from '../assets/onepiece.jpg';

const list = (datas) => {
  const aniContainer = document.querySelector('.main-anime-container');

  //   aniContainer.innerHTML = "";
  datas.forEach((data, idx) => {
    aniContainer.innerHTML += `<div class="display">
      <img
        class="image-display"
        src=${data.aniImg}
        alt=${data.aniTitle}
      />
      <div class="description">
        <span class="title-display">${data.aniTitle}</span>
        <button type="button" class="likes-btn">
          <svg viewBox="0 0 24 24">
            <path
              d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
            ></path>
          </svg>
        </button>
        <span class="likes-count"></span>
        <div>
          <button type="button" class="comment-btn">Comment</button>
        </div>
      </div>
    </div>`;

    const imgs = document.querySelectorAll('.image-display');
    if (data.aniTitle === 'One Piece') {
      imgs[idx].src = onepiece;
    } else {
      imgs[idx].src = data.aniImg;
    }
  });
};

export default list;
