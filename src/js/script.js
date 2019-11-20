/* eslint-disable no-irregular-whitespace */
'use strict';

document.querySelector('.hamburger').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('.sidebar').classList.toggle('hidden');
  console.log('Hamburger click');
  console.log('Twoja rozdzielczość ekranu to: ' + document.body.clientWidth + 'x' + document.body.clientHeight);
});