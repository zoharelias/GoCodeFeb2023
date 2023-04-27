//Objects - excercise 5 and 6 with dynamic number of cats

function checkItsCatName(catObj,nameToCheck){
    if(catObj.name === nameToCheck)
        return true;
    return false;
}


//ex5 dynamic
console.log('objects ex5 - dynamic');
let numberOfCats = parseInt(prompt('Enter number of cats to create'));// dynamic number of cats
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


//ex6 dynamic
console.log('objects ex6 - dynamic');
numberOfCats = parseInt(prompt('objects Ex6 dynamic: Enter number of cats to create'));// dynamic number of cats
const nameToCheck = prompt('objects Ex6 dynamic: Enter Name to check');
const newCats = {};
for(let i=1;i<=numberOfCats;i++){
    inputCatName = prompt('Enter name of cat #' + i + ' of ' + numberOfCats);
    inputCatColor = prompt('Enter color of cat #' + i + ' of ' + numberOfCats);
    newCats['cat' + i]={
        name : inputCatName,
        color : inputCatColor
    };
    console.log('you selected to check the name:', nameToCheck );
    console.log('cat#'+ i +' name is: ', newCats['cat'+i].name, ', is it equal to the name to check?', checkItsCatName(newCats['cat'+i] ,nameToCheck));
    
}
