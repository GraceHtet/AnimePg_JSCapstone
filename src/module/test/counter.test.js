/**
 * @jest-environment jsdom
 */

import cmtCounter from '../cmtcounter.js';

describe('Comment counter', () => {
  test('Comments numbers', () => {
    document.body.innerHTML = `<h2 class="sub-title">Comments - <span class="cmt-count"></span></h2>
    <ul class="comment-list">
        <li>
            <span>2023-02-08</span>
            <span>Grace:</span>
            <span>"Must Watch"</span>
        </li>
        <li>
            <span>2023-02-09</span>
            <span>Thiri:</span>
            <span>"all time favourite"</span>
        </li>
        <li>
            <span>2023-02-08</span>
            <span>Htet:</span>
            <span>"One of my Fav"</span>
        </li>
        <li>
            <span>2023-02-09</span>
            <span>Sou:</span>
            <span>"what a great anime"</span>
        </li>
    </ul>`;
    const cmtList = document.querySelector('.comment-list');
    cmtCounter(cmtList);
    const cmtCount = document.querySelector('.cmt-count');
    expect(cmtCount.textContent).toEqual('4');
  });
});
