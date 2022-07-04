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