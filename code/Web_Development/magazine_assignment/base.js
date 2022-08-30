window.onload = function () {
  const loadMoreButton = document.getElementsByClassName('loadMoreButt')[0];
  const showBottom = document.getElementsByClassName('showBottom')[0];
  let currentItems = 2;
  loadMoreButton.addEventListener('click', () => {
    const elementList = document.getElementsByClassName('latestNews');
    for (let i = currentItems; i < currentItems + 2; i++) {
      if (elementList[i]) {
        elementList[i].style.display = 'block';
      }
    }
    currentItems += 2;
    if (currentItems >= elementList.length) {
      loadMoreButton.style.display = 'none';
      showBottom.style.display = 'block';
    }
  });
};
