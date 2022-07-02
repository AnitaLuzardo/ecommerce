let menu = document.querySelector('#menu');
const btnMenu = document.querySelector('#btnMenu');

btnMenu.addEventListener('click',  () => {
  menu.classList.toggle('menu-on');
})

//Slider descripción de producto
// function myfuntion(smallImag){
//   var fullImag= document.getElementById("imageBox");
//   fullImag.src= smallImag.src;
// }