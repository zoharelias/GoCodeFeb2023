const h1 = document.querySelector('h1');
const h1All = document.querySelectorAll('h1');

h1All.innerText ='pppp';
//h1.innerText = 'agagagag';

h1All[0].innerText = 'rrr';
h1All[1].classList.add('hide');
h1All.forEach(function(item){
    item.style.color ='blue';
    item.innerText='kkk';
    //item[0].classList.add('hide');
})

