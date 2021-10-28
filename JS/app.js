let menu = document.querySelector('#menu');
let bxMenu = document.querySelector('#bx-menu');

bxMenu.addEventListener('click',  () => {
  menu.classList.toggle('menu-on');
})