let menu = document.querySelector('#menu');
let bxMenu = document.querySelector('#bx-menu');

bxMenu.addEventListener('click',  () => {
  menu.classList.toggle('menu-on');
})

//Slider descripción de producto
function myfuntion(smallImag){
  var fullImag= document.getElementById("imageBox");
  fullImag.src= smallImag.src;
}