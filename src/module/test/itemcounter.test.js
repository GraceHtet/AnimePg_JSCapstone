import itemCounter from '../itemcounter.js';
import * as ApiData from '../showList.js';

jest.mock('../showList');

/**
 * @jest-environment jsdom
 */

describe('itemCounter', () => {
  it('should show the correct count of anime TV shows', () => {
    ApiData.anidata = [
      {
        aniId: 49387,
        aniImg: 'https://cdn.myanimelist.net/images/anime/1170/124312.jpg',
        aniTitle: 'Vinland Saga Season 2',
      },
      {
        aniId: 49388,
        aniImg: 'https://cdn.myanimelist.net/images/anime/1170/124312.jpg',
        aniTitle: 'Vinland Saga Season 3',
      },
      {
        aniId: 49389,
        aniImg: 'https://cdn.myanimelist.net/images/anime/1170/124312.jpg',
        aniTitle: 'Vinland Saga Season 4',
      },
    ];

    const counter = document.createElement('h3');
    counter.setAttribute('class', 'anime-title');
    jest.spyOn(document, 'querySelector').mockReturnValueOnce(counter);
    itemCounter();
    expect(counter.innerHTML).toBe(
      'Anime TV shows <span class="shows-tracker">(3)</span>',
    );
  });

  it('should show "No shows added" if the length of anidata is 0', () => {
    ApiData.anidata = [];

    const counter = document.createElement('h3');
    counter.setAttribute('class', 'anime-title');
    jest.spyOn(document, 'querySelector').mockReturnValueOnce(counter);
    itemCounter();
    expect(counter.innerHTML).toBe('No shows added');
  });
});
