// 1
const userText = prompt('Excercise 1: Enter a word');
for(let i=0;i<10;i++){
    console.log(userText);
}

2//
const numberOfHello = parseInt(prompt('Excercise 2: how many times to say hello?'));
for(let i=0;i<numberOfHello;i++){
    console.log('Hello');
}

3//
const numberOfGrades = parseInt(prompt('Excercise 3: how many grades?'));
let sumOfGrades = 0;
for(let i=0;i<numberOfGrades;i++){
     sumOfGrades += parseInt(prompt('Input ' + (i+1) + ' of ' + numberOfGrades));
}
console.log('the average of the grades is:', sumOfGrades/numberOfGrades);

//4
for(let t='';t!=='stop';){
    t = prompt('Excercise 4: Enter a word');
        console.log(t);
}

//5
let biggestNumber = 0;
for(let i=0;i!== -1 ;){
    i=parseInt(prompt('Excercise 5: enter a number'));
    if(i !== -1){
        if(i > biggestNumber){
            biggestNumber = i;
        }
    }
}
console.log(biggestNumber);

//6-1
let i=0;
const usetInput = prompt('Excercise 6-1: Enter a word');
while(i<10){
    console.log(usetInput);
    i++;
}

//6-2
const numberOfHello2 = parseInt(prompt('Excercise 6-2: how many times'))
let t=0
while(t<numberOfHello2){
    console.log('Hello');
    t++;
}

//6-3
const numberOfGrades2 = parseInt(prompt('Excercise 6-3: how many grades?'));
let sumOfGrades2 = 0;
let counter=0;
while(counter < numberOfGrades2){
    sumOfGrades2 += parseInt(prompt('Input ' + (counter+1) + ' of ' + numberOfGrades2)); 
    counter++;
}
console.log('the average of the grades is:', sumOfGrades2/numberOfGrades2);


//7-4
let myWord ='';
do{
    myWord = prompt('Excercise 7-4: Enter a word');
    console.log(myWord);
} while(myWord !== 'stop');

//7-5
let biggestNumber2 = -1;
do{
    inputNumber = parseInt(prompt('Excercise 7-5: Enter a number'));
    if(inputNumber > biggestNumber2){
        biggestNumber2 = inputNumber;
    }
} while(inputNumber !== -1);
console.log(biggestNumber2);
