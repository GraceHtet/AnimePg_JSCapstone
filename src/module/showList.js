import { aniApi, popup } from './popup.js';
import { likeAction, showLikes } from './like.js';
import list from './dynamicList.js';

const anidata = [];

const apiFun = async () => {
  const api = await aniApi();
  api.forEach((each, idx) => {
    if (each.title_english !== null && idx <= 12) {
      anidata.push({
        aniId: each.mal_id,
        aniTitle: each.title_english,
        aniImg: each.images.jpg.image_url,
      });
    }
  });

  list(anidata);
  popup(anidata);
  likeAction(anidata);
  showLikes(anidata);
};

export { apiFun, anidata };
