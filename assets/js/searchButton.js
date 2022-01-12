'use strict';

const searchButton = document.querySelectorAll('.js-searchButton');
const searchWrap = document.querySelector('.p-header__search');

console.log(searchButton);

searchButton.forEach(function (target){
  target.addEventListener('click', function() {
    searchWrap.classList.toggle('_show');
    this.classList.toggle('_show');
  });
});


// searchButton.addEventListener('click', () => {
//   searchWrap.classList.toggle('_show');
//   searchButton.classList.toggle('_show');
// });