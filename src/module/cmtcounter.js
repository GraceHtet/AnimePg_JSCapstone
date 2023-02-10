const cmtCounter = (cmtlist) => {
  const cmtCount = document.querySelector('.cmt-count');
  if (cmtlist.innerHTML === '<i>There is no comment, yet....</i>') {
    cmtCount.textContent = 0;
  } else {
    cmtCount.textContent = cmtlist.childElementCount;
  }
};

export default cmtCounter;
