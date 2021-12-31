'use strict';

const btn = document.getElementById('js-btn');
const nav = document.getElementById('js-nav');

btn.addEventListener('click', () => {
    btn.classList.toggle('is-open');
    nav.classList.toggle('-open');
});