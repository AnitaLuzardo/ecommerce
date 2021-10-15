let menu = document.querySelector('#menu');
let bxMenu = document.querySelector('#bx-menu');

const slider = document.querySelector('#slider-container');
let sliderSection = document.querySelectorAll('.contenido-slide');
let sliderSectionLast =  sliderSection[sliderSection.length -1]; 

const btnLeft = document.querySelector('#btnleft');
const btnRigth = document.querySelector('#btnright');

bxMenu.addEventListener('click',  () => {
  menu.classList.toggle('menu-on');
})

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next (){
  let sliderSectionFirst = document.querySelectorAll('.contenido-slide')[0];
  slider.style.marginLeft = '-200%';
  slider.style.transition = 'all 1s';
  setTimeout(() => {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = '-100%';
  }, 1000);
}

function prev (){
  let sliderSection = document.querySelectorAll('.contenido-slide');
  let sliderSectionLast =  sliderSection[sliderSection.length -1]; 
  slider.style.marginLeft = '0';
  slider.style.transition = 'all 1s';
  setTimeout(() => {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = '-100%';
  }, 1000);
}

btnRigth.addEventListener('click', function (){
  next()
});

btnLeft.addEventListener('click', function (){
  prev()
});

setInterval(() => {
  next();
}, 6000);

let sliderResp = document.querySelector('.content-respFooter');
let sliderIndividual = document.querySelectorAll('.service-respFooter');
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function() {
  width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
  slide();
}, intervalo)

function slide(){
  sliderResp.style.transform = "translate("+(-width*contador)+"px)";
  sliderResp.style.transition = "all 1s";
  contador++;
  if(contador == sliderIndividual.length){
    setTimeout(function(){
      sliderResp.style.transform = "translate(0px)";
      sliderResp.style.transition = "all 0s";
      contador= 1;
    }, 1500)
  }
}