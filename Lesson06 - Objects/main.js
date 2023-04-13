//Objects

//ex1
const cat = {
    name: 'kramer',
    color: 'white',
    age: 3,
    sayMewo: function(){
        console.log('MEWO!');
    }
}

console.log(cat);

//ex2
const catNewProperty = prompt('ex2: Enter a new property to the cat');
const catNewPropertyValue = prompt('ex2: Enter value for the new property');
cat[catNewProperty] = catNewPropertyValue;
console.log(cat);

//ex3
function checkItsCatName(catObj,nameToCheck){
    if(catObj.name === nameToCheck)
        return true;
    return false;
}

console.log(checkItsCatName(cat,'kramer')); //true
console.log(checkItsCatName(cat,'mer')); //false

//ex4
function combineTwoObjects(object1,object2){
    const combinedObject = {};
    for(const key in object1){
        combinedObject[key] = object1[key];
    }
    for(const key in object2){
        combinedObject[key] = object2[key];
    }
    return combinedObject;
}

const fisrtObject = {
    firstName: 'Bob',
    lastName: 'Gale'
}
const secondObject = {
    age: 36,
    gender: 'male'
}

console.log(combineTwoObjects(fisrtObject,secondObject));

secondObject.age = 37;
fisrtObject.firstName = 'Robert';
const newObj = combineTwoObjects(fisrtObject,secondObject);
console.log(newObj);


//ex5:
const cat1 = {
    color: 'white',
};
const cat2 = {
    color: 'black',
};
const cat3 = {
    color: 'grey',
};

const cats = {
    cat1: cat1,
    cat2: cat2,
    cat3: cat3,
}
const catsColors = {
    cat1Color: cat1.color,
    cat2Color: cat2.color,
    cat3Color: cat3.color,
}

console.log(cats);
console.log(catsColors);


//ex6
const cat6a = {};
const cat6b = {};
const cat6c = {};

const cat6aName = prompt('Ex6: Enter cat1 name');
//const cat6aColor = prompt('Ex6: Enter cat1 color');
const cat6bName = prompt('Ex6: Enter cat2 name');
//const cat6bColor = prompt('Ex6: Enter cat2 color');
const cat6cName = prompt('Ex6: Enter cat3 name');
//const cat6cColor = prompt('Ex6: Enter cat4 color');
const nameToCheck6 = prompt('Ex6: Enter Name to check');

cat6a.name = cat6aName;
//cat6a.color = cat6aColor;
cat6b.name = cat6bName;
//cat6b.color = cat6bColor;
cat6c.name = cat6cName;
//cat6c.color = cat6cColor;
console.log(cat6a);
console.log('|' + cat6a.name + '|');
console.log(cat6b);
console.log('|' + cat6b.name + '|');
console.log(cat6c);
console.log('|' + cat6c.name + '|');

console.log('you selected to check the name:', nameToCheck6 );
console.log('cat#1 name is: ', cat6a.name, ', is it equal to the name to check?', checkItsCatName(cat6a ,nameToCheck6));
console.log('cat#2 name is: ', cat6b.name, ', is it equal to the name to check?', checkItsCatName(cat6b ,nameToCheck6));
console.log('cat#3 name is: ', cat6c.name, ', s it equal to the name to check?', checkItsCatName(cat6c ,nameToCheck6));


//Arrays
console.log('ARRAYS');
//ex1
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

console.log(createArraybyLen(7));
console.log(createArraybyLen(3));

//ex2
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
function reverseArray(arrayToReverse){
    const reversedArrayToReturn = [];
    for(let i=0;i<arrayToReverse.length;i++){
        reversedArrayToReturn[i] = arrayToReverse[arrayToReverse.length - (i+1)];
    }
    return reversedArrayToReturn;
}

let myArrayToReverse = [1,2,3,4,5,6,7];
console.log(reverseArray(myArrayToReverse));

myArrayToReverse = [1,2,3,4];
console.log(reverseArray(myArrayToReverse));


//ex4
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

