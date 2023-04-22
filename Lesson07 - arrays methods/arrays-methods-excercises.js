//array methods excercises
//ex1
// console.log('excercise 1:');
// const myNumbers = [2,3,4];

// function returnExponentWithLoop(arrayParameter){
//     const loopedArray = [];
//     for(let i=0;i<arrayParameter.length;i++){
//         loopedArray[i]=arrayParameter[i]**2;
//     }
//     return loopedArray;
// }

// function returnExponentWithMap(arrayParameter){
//     const loopedArray = arrayParameter.map(function(item){
//         return item ** 2;
//     });
//     return loopedArray;
// }


// console.log('original array',myNumbers);
// console.log('new array',returnExponentWithLoop(myNumbers));
// console.log('mapped array',returnExponentWithMap(myNumbers));

// //ex2
// console.log('excercise 2:');

// function sortGroceryList(listToSort, orderToSort){
//     if(!Array.isArray(listToSort)){ //I sent not an array by accident so I added verification
//         return 'NOT AN ARRAY';
//     }
//     if(orderToSort === 'down'){
//         return listToSort.sort().reverse();
//     } else {
//         return listToSort.sort();
//     }
// }

// const groseryListArray = ['bread','apples','potatos','milk','bananas'];
// console.log(groseryListArray);
// console.log('sort up',sortGroceryList(groseryListArray,'up'));
// console.log('sort down',sortGroceryList(groseryListArray,'down'));
// console.log(sortGroceryList('not an array','up'));

// //ex3
// console.log('excercise 3:');

// function lastArrayByLoop(arrayToSlice,numberOfelements){
//     if(numberOfelements === undefined){
//         return arrayToSlice[arrayToSlice.length-1];
//     }
//     const arrayToReturn = [];
//     for(i=0; i<numberOfelements;i++){
//         arrayToReturn[i] = arrayToSlice[arrayToSlice.length-(i+1)];
//     }
//     return arrayToReturn;

// }

// function lastArrayBySlice(arrayToSlice,numberOfelements){
//     if(numberOfelements === undefined){
//         return arrayToSlice.slice(-1)[0];
//     }
//     return arrayToSlice.reverse().slice(0,numberOfelements);
// }
// const myArray = [1,2,3,4,5,6,7,8,9];
// const myStrArray = ['aa','bb','cc','dd']

// //loop - no second argument
// console.log('loop - no second argument',lastArrayByLoop(myArray));
// console.log('loop - no second argument',lastArrayByLoop(myStrArray));

// //loop - with second argument
// console.log('loop - second argument = 6',lastArrayByLoop(myArray,6));
// console.log('loop - second argument = 3',lastArrayByLoop(myArray,3));
// console.log('loop - second argument = 2',lastArrayByLoop(myStrArray,2));

// //slice - no second argument
// console.log('slice - no second argument', lastArrayBySlice(myArray));
// console.log('slice - no second argument', lastArrayBySlice(myStrArray));

// //slice - with second argument
// console.log('slice - second argument = 6',lastArrayBySlice(myArray,6));
// console.log('slice - second argument = 3',lastArrayBySlice(myArray,3));
// console.log('slice - second argument = 2',lastArrayBySlice(myStrArray,2));


// //ex4
// console.log('excercise 4:');

// function returnNotCapital(array){
//     const returnedArray = array.filter(function(item){
//         return item.match(/[A-Z]/) === null;
//     });
//     return returnedArray;
// }

// const arrayToCheckCapitals = ['aaa','Bbb','ccc','Ddd','H','Edd','mm','N'];
// console.log(returnNotCapital(arrayToCheckCapitals));


// //ex5
// console.log('excercise 5:');

// function reverseStr(srtingToReverse){
//     //longer:
//     //const splintedArray = srtingToReverse.split('').reverse();
//     //const joinedReverseString = splintedArray.join('');    
//     //return joinedReverseString;
    
//     //in 1 line:
//     return srtingToReverse.split('').reverse().join('');
// }

// console.log(reverseStr('abcdefg'));

// //ex6
// console.log('excercise 6:');

// function returnOnlyPalindroms(arrayOfWords){
//     const returnedArray = arrayOfWords.filter(function(item){
//         return item === reverseStr(item); 
//     });
//     return returnedArray;
// }

// const myArrayOfWords = ['aba', 'saba', 'dod','doda', 'mama','mom'];
// console.log(returnOnlyPalindroms(myArrayOfWords));


// //ex7
// console.log('excercise 7:');

// function delAnimals(arrayOfAnimals,arrayOfDeletedAnimanls){
//     const returnedArray = arrayOfAnimals.filter(function(item){
//         return arrayOfDeletedAnimanls.includes(item) === false;
//     });
//     return returnedArray;
// }

// const fullListOfAnimals = ['dog','cat','lion','wolf','koala','monkey'];
// const animalsToRemove = ['dog','wolf','koala'];
// console.log(delAnimals(fullListOfAnimals,animalsToRemove));


//ex8
// console.log('excercise 8:');

// function guessNumber(){
//     const numbrToMatch = Math.floor(Math.random() * 6) + 1; //betwwen 1 to 6
//     console.log('random number:',numbrToMatch );
//     const olderGueses = [];
//     let guess = 0;
//     do{
//         guess = parseInt(prompt('Enter a number between 1 to 6'));
//         //console.log('random number:',numbrToMatch,'guess:',guess);
//         if(guess === numbrToMatch){
//             //console.log('olderGueses',olderGueses);
//             return 'correct! you guessed ' + guess + ', older guesses were ' + olderGueses.join();
//         } else {
//             olderGueses.push(guess);
//             //console.log(olderGueses.length);
//         }
//     } while(guess !== numbrToMatch) 
// }

// console.log(guessNumber());

//ex9
console.log('excercise 9:');

// function sortUpOrDownOLD(upOrDown,firstNum,secondNum,thirdNum,forthNum,fifthNum){
//     const arrayToReturn = [];
//     arrayToReturn.push(firstNum);
//     arrayToReturn.push(secondNum);
//     arrayToReturn.push(thirdNum);
//     arrayToReturn.push(forthNum);
//     arrayToReturn.push(fifthNum);
//     if(upOrDown === 'up'){
//         return arrayToReturn.sort();
//     } else if (upOrDown === 'down'){
//         return arrayToReturn.sort().reverse();
//     } else {
//         return 'UNSORTED ' + arrayToReturn;
//     }
// }
function sortUpOrDown(upOrDown,numbersArray){
     const arrayToReturn = numbersArray.slice();
    if(upOrDown === 'up'){
        return arrayToReturn.sort(function(a, b){return a-b});
    } else if (upOrDown === 'down'){
        return arrayToReturn.sort(function(a, b){return a-b}).reverse();
    } else {
        return 'UNSORTED ' + arrayToReturn;
    }
}
const numArr = [2,1,77,5,6,99,9];
console.log(sortUpOrDown('up',numArr));
console.log(sortUpOrDown('down',numArr));
console.log(sortUpOrDown('xx',numArr));





//ex10
// console.log('excercise 10:');

// const originalArray = [1,2,3,4,5];
// console.log('originalArray before change',originalArray);

// const referencedArray = originalArray; //for reference
// console.log('referencedArray before change',referencedArray);

// //three value copied arrays
// const firstCopiedArray = originalArray.slice();
// console.log('firstCopiedArray before change',firstCopiedArray);

// const secondCopiedArray = originalArray.map(function(item){
//     return item;
// });
// console.log('secondCopiedArray before change',secondCopiedArray);

// const thirdCopiedArray = [];
// for(let i=0;i<originalArray.length;i++){
//     thirdCopiedArray[i] = originalArray[i];
// }
// console.log('thirdCopiedArray before change',thirdCopiedArray);

// //now changing the original array
// console.log('now changing the original array');
// originalArray[0] = 0;
// console.log('originalArray after change',originalArray);
// console.log('referencedArray after change',referencedArray);
// console.log('firstCopiedArray after change',firstCopiedArray);
// console.log('secondCopiedArray after change',secondCopiedArray);
// console.log('thirdCopiedArray after change',thirdCopiedArray);

