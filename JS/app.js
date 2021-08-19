let menu = document.querySelector('#menu');
let bxMenu = document.querySelector('#bx-menu');
let slider = document.querySelector('.container-banner');
let sliderIndividual = document.querySelectorAll('.banner-container');
let contador = 1;
let width = sliderIndividual[0].clientWidth
let intervalo = 5000;

bxMenu.addEventListener('click',  () => {
  menu.classList.toggle('menu-on');
})

window.addEventListener("resize", () => {
  width = sliderIndividual[0].clientWidth;
})

setInterval(() => {
  slides();
},intervalo)

function slides () {
  slider.style.transform = "translate("+(-width*contador)+"px)";
  slider.style.transition = "transform .9s"
  contador++;

  if(contador == sliderIndividual.length){
    setTimeout(() => {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s";
      contador = 1;
    },1500)
  }
}
