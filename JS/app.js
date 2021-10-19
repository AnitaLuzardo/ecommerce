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

const contentSlider = document.querySelector('#content-respF');
let sliderFooter = document.querySelectorAll('.service-respFooter');
let sliderFooterLast =  sliderFooter[sliderFooter.length -1];

let btnLeftResp = document.querySelector('#btnleftResp');
let btnRigthResp = document.querySelector('#btnrightResp');

contentSlider.insertAdjacentElement('afterbegin', sliderFooterLast);

function nextResp() {
  let sliderFooterfirst = document.querySelectorAll('.service-respFooter')[0];
  contentSlider.style.marginLeft = '-200%';
  contentSlider.style.transition = 'all 1s';
  setTimeout(function(){
    contentSlider.style.transition = 'none';
    contentSlider.insertAdjacentElement('beforeend', sliderFooterfirst);
    contentSlider.style.marginLeft = '-100%';
  }, 1000);
}

btnRigthResp.addEventListener('click', function(){
  nextResp();
})

function prevResp() {
  let sliderFooter = document.querySelectorAll('.service-respFooter');
  let sliderFooterLast =  sliderFooter[sliderFooter.length -1];
  contentSlider.style.marginLeft = '0';
  contentSlider.style.transition = 'all 1s';
  setTimeout(function(){
    contentSlider.style.transition = 'none';
    contentSlider.insertAdjacentElement('afterbegin', sliderFooterLast);
    contentSlider.style.marginLeft = '-100%';
  }, 1000);
}

btnRigthResp.addEventListener('click', function(){
  nextResp();
})

btnLeftResp.addEventListener('click', function(){
  prevResp();
})

setInterval(() => {
  nextResp();
}, 6000);