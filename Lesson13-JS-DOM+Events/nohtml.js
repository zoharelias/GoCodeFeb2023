const mainHeader = document.createElement('h1');
mainHeader.innerText = "No HTML, all created dynamically in JavaScript"
document.body.appendChild(mainHeader);

const btnExAll = document.createElement('button');
btnExAll.innerText = 'Show all';
btnExAll.classList.add('exAll');
document.body.appendChild(btnExAll);

const btnEx1 = document.createElement('button');
btnEx1.innerText = 'Excercice1';
btnEx1.classList.add('ex1');
document.body.appendChild(btnEx1);

const btnEx2 = document.createElement('button');
btnEx2.innerText = 'Excercice2';
btnEx2.classList.add('ex2');
document.body.appendChild(btnEx2);

const btnEx3 = document.createElement('button');
btnEx3.innerText = 'Excercice3';
btnEx3.classList.add('ex3');
document.body.appendChild(btnEx3);

const btnEx4 = document.createElement('button');
btnEx4.innerText = 'Excercice4';
btnEx4.classList.add('ex4');
document.body.appendChild(btnEx4);

const btnEx5 = document.createElement('button');
btnEx5.innerText = 'Excercice5';
btnEx5.classList.add('ex5');
document.body.appendChild(btnEx5);

const btnEx6 = document.createElement('button');
btnEx6.innerText = 'Excercice6';
btnEx6.classList.add('ex6');
document.body.appendChild(btnEx6);


const container = document.createElement('div');
container.classList.add('container');

//excercise 1
const excercise1 = document.createElement('div');
excercise1.classList.add('divs');
excercise1.classList.add('excercise1');

const ex1h3 = document.createElement('h3');
ex1h3.innerText = 'Excercise1';
excercise1.appendChild(ex1h3);

const input1 = document.createElement('input');
input1.setAttribute('type','text');
input1.classList.add('input1');
excercise1.appendChild(input1);


const button1 = document.createElement('button');
button1.innerText = 'Show Text';
button1.classList.add('button1');
excercise1.appendChild(button1);

//excercise 2
const excercise2 = document.createElement('div');
excercise2.classList.add('divs');
excercise2.classList.add('excercise2');

const ex2h3 = document.createElement('h3');
ex2h3.innerText = 'Excercise2';
excercise2.appendChild(ex2h3);

const ex2h1x = document.createElement('h1');
ex2h1x.innerText='X';
ex2h1x.classList.add('x');
excercise2.appendChild(ex2h1x);

const ex2h1y = document.createElement('h1');
ex2h1y.innerText='Y';
ex2h1y.classList.add('y');
excercise2.appendChild(ex2h1y);


//excercise 3
const excercise3 = document.createElement('div');
excercise3.classList.add('divs');
excercise3.classList.add('excercise3');

const ex3h3 = document.createElement('h3');
ex3h3.innerText = 'Excercise3';
excercise3.appendChild(ex3h3);


const input3 = document.createElement('input');
input3.setAttribute('type','text');
input3.setAttribute('value','https://cdn.shopify.com/s/files/1/2009/1313/products/01779_1_600x.jpg');
input3.classList.add('input3');
excercise3.appendChild(input3);


const button3 = document.createElement('button');
button3.innerText = 'Show Picture';
button3.classList.add('button3');
excercise3.appendChild(button3);

const img3 = document.createElement('img');
img3.classList.add('image');
excercise3.appendChild(img3);


//excercise 4
const excercise4 = document.createElement('div');
excercise4.classList.add('divs');
excercise4.classList.add('excercise4');

const ex4h3 = document.createElement('h3');
ex4h3.innerText = 'Excercise4';
excercise4.appendChild(ex4h3);

const ul4 = document.createElement('ul');
ul4.classList.add('ul4');
excercise4.appendChild(ul4);

const button4 = document.createElement('button');
button4.innerText = 'Delete last number';
button4.classList.add('button4');
excercise4.appendChild(button4);


//excercise 5
const excercise5 = document.createElement('div');
excercise5.classList.add('divs');
excercise5.classList.add('excercise5');

const ex5h3 = document.createElement('h3');
ex5h3.innerText = 'Excercise5';
excercise5.appendChild(ex5h3);

const button5a = document.createElement('button');
button5a.innerText = 'white';
button5a.classList.add('button5');
excercise5.appendChild(button5a);

const button5b = document.createElement('button');
button5b.innerText = 'blue';
button5b.classList.add('button5');
excercise5.appendChild(button5b);

const button5c = document.createElement('button');
button5c.innerText = 'red';
button5c.classList.add('button5');
excercise5.appendChild(button5c);

const button5d = document.createElement('button');
button5d.innerText = 'green';
button5d.classList.add('button5');
excercise5.appendChild(button5d);


const button5e = document.createElement('button');
button5e.innerText = 'black';
button5e.classList.add('button5e');
excercise5.appendChild(button5e);


//excercise 6
const excercise6 = document.createElement('div');
excercise6.classList.add('divs');
excercise6.classList.add('excercise6');

const ex6h3 = document.createElement('h3');
ex6h3.innerText = 'Excercise6';
excercise6.appendChild(ex6h3);

const button6a = document.createElement('button');
button6a.innerText = 'Start colors rotation';
button6a.classList.add('button6start');
excercise6.appendChild(button6a);

const button6b = document.createElement('button');
button6b.innerText = 'End colors rotation';
button6b.classList.add('button6end');
excercise6.appendChild(button6b);




//add excercises divs to container
container.appendChild(excercise1);
container.appendChild(excercise2);
container.appendChild(excercise3);
container.appendChild(excercise4);
container.appendChild(excercise5);
container.appendChild(excercise6);

//add container to body
document.body.appendChild(container);

