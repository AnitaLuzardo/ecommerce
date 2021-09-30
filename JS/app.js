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
