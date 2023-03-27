

//Arrays
console.log('ARRAYS');
//ex1
console.log('arrays ex1');
function createArraybyLen(arrLenInput){
    const arrDynamicLength = [];
    for(let i=0;i<arrLenInput;i++){
        //using push
        //arrDynamicLength.push(i);
        
        //other solution
        arrDynamicLength[i] = i;
    }
    return arrDynamicLength;
}

console.log('array length 7:',createArraybyLen(7));
console.log('array length 3', createArraybyLen(3));

//ex2
console.log('arrays ex2');
function doubledArray(arrayToDouble){
    const returnedDoubledArray =[];
    for(let i=0;i<arrayToDouble.length;i++){
        //using push 
        //returnedDoubledArray.push(arrayToDouble[i]);
        //returnedDoubledArray.push(arrayToDouble[i]);
        
        //other solution
        returnedDoubledArray[i * 2] = arrayToDouble[i];
        returnedDoubledArray[(i * 2)+1] = arrayToDouble[i];
    }
    return returnedDoubledArray;
}

const smallArray = ['a','b','c'];
console.log(doubledArray(smallArray));


//ex3
console.log('arrays ex3');
function reverseArray(arrayToReverse){
    const reversedArrayToReturn = [];
    for(let i=0;i<arrayToReverse.length;i++){
        reversedArrayToReturn[i] = arrayToReverse[arrayToReverse.length - (i+1)];
    }
    return reversedArrayToReturn;
}

let myArrayToReverse = [1,2,3,4,5,6,7];
console.log('input array is [1,2,3,4,5,6,7], reversed array is:',reverseArray(myArrayToReverse));

myArrayToReverse = ['a','b','c','d'];
console.log("input array is ['a','b','c','d'], reversed array is:",reverseArray(myArrayToReverse));


//ex4
console.log('arrays ex4');
function sequeceOfNumbersArray(firstNumber){
    const arrayToReturn = [firstNumber];
    for(let i=1;i<10;i++){
        arrayToReturn[i] = firstNumber + i;
    }
    return arrayToReturn;
}

console.log(sequeceOfNumbersArray(6));
const firstNum = parseInt(prompt('Arrays Ex4: enter a number'));
console.log(sequeceOfNumbersArray(firstNum));


//ex5
console.log('arrays ex5');
function dogsArray(dog1, dog2, dog3){
    const dogsArray = [dog1,dog2,dog3];
    return dogsArray;
}

const firstDog = {
    name: 'rex',
    eyeColor: 'blue',
    weight: 45,
    age: 6
}
const secondDog = {
    name: 'lolipop',
    eyeColor: 'brown',
    weight: 15,
    age: 3
}
const thirdDog = {
    name: 'jerry',
    eyeColor: 'black',
    weight: 25,
    age: 4
}

console.log(dogsArray(firstDog,secondDog,thirdDog));

