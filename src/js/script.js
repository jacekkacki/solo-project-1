/* eslint-disable no-irregular-whitespace */
'use strict';

function moveTopbar(){
  const sidebarToggled = document.querySelector('.sidebar').classList.contains('hidden');
  const topbarElem = document.querySelector('.topbar');
  
  if(sidebarToggled){
    /*topbarElem.style.setProperty('display', 'block');*/
    topbarElem.style.setProperty('position', 'left');
    console.log('topbarElem', topbarElem);
  }
}

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
  console.log('Twoja rozdzielczość ekranu to: ' + document.body.clientWidth + 'x' + document.body.clientHeight);
  console.log(document.querySelector('.topbar'));
  moveTopbar();
});

