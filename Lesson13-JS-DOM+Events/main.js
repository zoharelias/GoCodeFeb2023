const btnToolbarAll = document.querySelector('.exAll');
const btnToolbar1 = document.querySelector('.ex1');
const btnToolbar2 = document.querySelector('.ex2');
const btnToolbar3 = document.querySelector('.ex3');
const btnToolbar4 = document.querySelector('.ex4');
const btnToolbar5 = document.querySelector('.ex5');
const btnToolbar6 = document.querySelector('.ex6');


const div1 = document.querySelector('.excercise1');
const div2 = document.querySelector('.excercise2');
const div3 = document.querySelector('.excercise3');
const div4 = document.querySelector('.excercise4');
const div5 = document.querySelector('.excercise5');
const div6 = document.querySelector('.excercise6');


function hideAllButOne(divToShow){
    const allDivs = document.querySelectorAll('.divs');
    allDivs.forEach(function(toolItem){
        toolItem.style.visibility = 'hidden';
    });
    divToShow.style.visibility = 'visible';
}

//toggle visibility of excercises
btnToolbarAll.addEventListener('click',function(){
    const allDivs = document.querySelectorAll('.divs');
    allDivs.forEach(function(toolItem){
        toolItem.style.visibility = 'visible';
    });
});

btnToolbar1.addEventListener('click',function(){
    hideAllButOne(div1);
});

btnToolbar2.addEventListener('click',function(){
    hideAllButOne(div2);
});

btnToolbar3.addEventListener('click',function(){
    hideAllButOne(div3)
});

btnToolbar4.addEventListener('click',function(){
    hideAllButOne(div4)
});

btnToolbar5.addEventListener('click',function(){
    hideAllButOne(div5)
});

btnToolbar6.addEventListener('click',function(){
    hideAllButOne(div6)
});



//excercise 1
const input1js = document.querySelector('.input1');
const button1js = document.querySelector('.button1');

button1js.addEventListener('click',function(){
    alert(input1js.value);
})

//excercise 2
const x = document.querySelector('.x');
const y = document.querySelector('.y');

document.body.addEventListener('mousemove',function(event){
     x.innerText = event.clientX;
     y.innerText = event.clientY;
})

//excercise 3
const input3js = document.querySelector('.input3');
const button3js = document.querySelector('.button3');

const myImg = document.querySelector('.image');

button3js.addEventListener('click', function(){
    myImg.src = input3js.value;
})


//excercise 4

const myList =  document.querySelector('.ul4');
const button4js = document.querySelector('.button4');
let listLength = 10;
let listArray = [];
myList.innerHTML='';
drawList(listLength,myList);
button4js.addEventListener('click',function(){
    myList.innerHTML = '';
    listArray = [];
    listLength -= 1;
    drawList(listLength,myList);
    console.log(listArray);
});

function drawList(length,listOnDom){
    for(let i=1;i<=length;i++){
        const li = document.createElement('li');
        li.innerText = i;
        listOnDom.appendChild(li);
        listArray.push(i);
    }
}


//excercise 5
const buttons5 = document.querySelectorAll('.button5');
buttons5.forEach(function(myButton){
    myButton.addEventListener('click', function(){
        const myColor = myButton.innerText;
        console.log(myColor);
        document.body.style.backgroundColor = myColor;
    })
});


//excercise 6
const button6start = document.querySelector('.button6start');
const button6end = document.querySelector('.button6end');

let myInterval;

button6start.addEventListener('click', function(){
    myInterval = setInterval(randomizeBgColor, 2000);
    //randomizeBgColor();
});

button6end.addEventListener('click', function(){
    clearInterval(myInterval);
});


function randomizeBgColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}