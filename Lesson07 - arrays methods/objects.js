//Objects

//ex1
console.log('objects ex1');
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
console.log('objects ex2');
const catNewProperty = prompt('objects ex2: Enter a new property to the cat');
const catNewPropertyValue = prompt('objects ex2: Enter value for the new property');
cat[catNewProperty] = catNewPropertyValue;
console.log(cat);

//ex3
console.log('objects ex3');
function checkItsCatName(catObj,nameToCheck){
    if(catObj.name === nameToCheck)
        return true;
    return false;
}

console.log(checkItsCatName(cat,'kramer')); //true
console.log(checkItsCatName(cat,'mer')); //false

//ex4
console.log('objects ex4');
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
console.log('objects ex5');
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

//ex5 dynamic
console.log('objects ex5 - dynamic');
let numberOfCats = 4; // dynamic number of cats, could be also with prompt instead
const catsDynamic = {};
let inputCatName;
let inputCatColor;
for(let i=1;i<=numberOfCats;i++){
    inputCatName = prompt('Enter name of cat #' + i + ' of ' + numberOfCats);
    inputCatColor = prompt('Enter color of cat #' + i + ' of ' + numberOfCats);
    catsDynamic['cat' + i]={
        name : inputCatName,
        color : inputCatColor
    };
}
console.log(catsDynamic);

//ex6
console.log('objects ex6');
const cat6a = {};
const cat6b = {};
const cat6c = {};

const cat6aName = prompt('objects Ex6: Enter cat1 name');
//const cat6aColor = prompt('Ex6: Enter cat1 color');
const cat6bName = prompt('objects Ex6: Enter cat2 name');
//const cat6bColor = prompt('Ex6: Enter cat2 color');
const cat6cName = prompt('objects Ex6: Enter cat3 name');
//const cat6cColor = prompt('Ex6: Enter cat4 color');
const nameToCheck6 = prompt('objects Ex6: Enter Name to check');

cat6a.name = cat6aName;
//cat6a.color = cat6aColor;
cat6b.name = cat6bName;
//cat6b.color = cat6bColor;
cat6c.name = cat6cName;
//cat6c.color = cat6cColor;

console.log('you selected to check the name:', nameToCheck6 );
console.log('cat#1 name is: ', cat6a.name, ', is it equal to the name to check?', checkItsCatName(cat6a ,nameToCheck6));
console.log('cat#2 name is: ', cat6b.name, ', is it equal to the name to check?', checkItsCatName(cat6b ,nameToCheck6));
console.log('cat#3 name is: ', cat6c.name, ', s it equal to the name to check?', checkItsCatName(cat6c ,nameToCheck6));

//ex6 dynamic
