const arrow_right = document.querySelector('.arrow-right');
const arrow_left = document.querySelector('.arrow-left');
const textsDiv = document.querySelector('.texts ');
let index = 0;
const texts = [
    'Cagirdi eller getdim davaya.',
    'Hamidan gozel menem',
    'Men kohne bir dervisem cehennemden gelmisem',

]

function slideRight(){
    if (index === texts.length -1 ) index = 0
    else index ++ 

   gsap.to('.images',.3 ,{x:`${-index*100}%`})
   textsDiv.textContent = texts[index]
};
function slideLeft(){
    if (index === 0 ) index = texts.length -1
    else index --
    gsap.to('.images',.3 ,{x:`${-index*100}%`})
    textsDiv.textContent = texts[index]
};
arrow_right.addEventListener('click',slideRight)
arrow_left.addEventListener('click',slideLeft)