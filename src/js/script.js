/* eslint-disable no-irregular-whitespace */
'use strict';

/*Check width screen*/
if(document.body.clientWidth < 768){
  document.querySelector('.sidebar').classList.toggle('hidden');
  document.querySelector('.main-content').classList.toggle('wide');  
}

/*Toggle button hamburger*/
document.querySelector('.hamburger').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('.sidebar').classList.toggle('hidden');
  document.querySelector('.main-content').classList.toggle('wide');
});

