const button = document.querySelector('#button-top');
const searchBar = document.querySelector('#search-fixed');
const header = document.querySelector('#header');
const slide = document.querySelector('.slide');

window.onscroll = function () {
  displayButton();
};

function displayButton() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    button.style.display = 'block';
    searchBar.style.display = 'block';
    header.style.position = 'fixed';
    header.style.backgroundColor = '#fff';
    header.style.width = '100%';
    header.style.zIndex = '99';
    header.style.marginTop = '-50px';
  } else {
    button.style.display = 'none';
    searchBar.style.display = 'none';
    header.style.position = 'relative';
    header.style.marginTop = '0';
  }
}

button.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
