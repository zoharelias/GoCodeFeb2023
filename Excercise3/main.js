// //FUNCTIONS
// // 1
// function logFullName(firstName,lastName){
//     console.log('ex1:',firstName,lastName);
// }

// //2a - console.log
// function showBiggestNumber(firstNumber,secondNumber,thirdNumber){
//     if(firstNumber > secondNumber){
//         if(firstNumber > thirdNumber){
//             console.log('ex2 log:',firstNumber);;
//         } else {
//             console.log('ex2 log:',thirdNumber);
//         }
//     } else {
//         if(secondNumber > thirdNumber){
//             console.log('ex2 log:',secondNumber);
//         } else {
//             console.log('ex2 log:',thirdNumber);
//         }
//     }
// }

// //2b - with return
// function returnBiggestNumber(firstNumber,secondNumber,thirdNumber){
//     if(firstNumber > secondNumber){
//         if(firstNumber > thirdNumber){
//             return firstNumber;
//         }
//     } else {
//         if(secondNumber > thirdNumber){
//             return secondNumber;
//         }
//     }
//     return thirdNumber;
// }



// 3//
// function positiveNegativeZero(numberToCheck){
//     if(numberToCheck > 0){
//         console.log('ex3:','Positive');
//     } else if(numberToCheck < 0){
//         console.log('ex3:','Negative');
//     } else if(numberToCheck === 0){
//         console.log('ex3:','Zero');
//     } else {
//         console.log('ex3:','INPUT ERROR');
//     }
// }

// //4a
// function validToEnter(name,age){
//     if(age >=18){
//         return name + ', you can enter';
//     } else {
//         return name + ', you cannot enter';
//     }
// }

// //4b
// //inside prompt
// function callValidToEnter(){
//     const nameOfPerson = prompt('ex4: Enter your name');
//     const ageOfPerson = parseInt(prompt('ex4: Enter your age'));
//     return validToEnter(nameOfPerson,ageOfPerson);
// }

// //outside prompt
// function callValidToEnterWithArguments(name,age){
//     return validToEnter(name,age);
// }


// //5
// function isEven(numberTocheck){
//     if(numberTocheck % 2 === 0){
//         return 'EVEN'
//     } else {
//         return 'ODD'
//     }
// }

// //PROGRAM
// //================
// //1
// const getFirstName = prompt('ex1: Enter your first name');
// const getLastName = prompt('ex1: Enter your last name');
// logFullName(getFirstName,getLastName);

// //2
// const getFirstNumber = parseInt(prompt('ex2: Enter first number'));
// const getSecondNumber = parseInt(prompt('ex2: Enter second number'));
// const getThirdNumber = parseInt(prompt('ex2: Enter third number'));
// showBiggestNumber(getFirstNumber,getSecondNumber,getThirdNumber);
// console.log('ex2 return:',returnBiggestNumber(getFirstNumber,getSecondNumber,getThirdNumber));

// //3
// positiveNegativeZero(1);
// positiveNegativeZero(-3);
// positiveNegativeZero(0);
// positiveNegativeZero('ddd');

// //with prompt
// let userInputNumber = parseInt(prompt('ex3: Enter a number'));
// positiveNegativeZero(userInputNumber);
// userInputNumber = parseInt(prompt('ex3: Enter a number'));
// positiveNegativeZero(userInputNumber);
// userInputNumber = parseInt(prompt('ex3: Enter a number'));
// positiveNegativeZero(userInputNumber);
// userInputNumber = parseInt(prompt('ex3: Enter a number'));
// positiveNegativeZero(userInputNumber);

// //4
// //inside prompt
// console.log(callValidToEnter());
// console.log(callValidToEnter());

// //outside prompt
// let promptName = prompt('ex4 outside arguments: Enter your name');
// let promptAge = parseInt(prompt('ex4 outside arguments: Enter your age'));
// console.log(callValidToEnterWithArguments(promptName,promptAge));

// promptName = prompt('ex4 outside arguments: Enter your name');
// promptAge = parseInt(prompt('ex4 outside arguments: Enter your age'));
// console.log(callValidToEnterWithArguments(promptName,promptAge));


// //ex5
// console.log('ex5:',isEven(5));
// console.log('ex5:',isEven(6));
// console.log('ex5:',isEven(0));

// //ex5 with prompt
// userInputNumber = parseInt(prompt('ex5: Enter a number'));
// console.log('ex5 prompt:',isEven(userInputNumber));
// userInputNumber = parseInt(prompt('ex5: Enter a number'));
// console.log('ex5 prompt:',isEven(userInputNumber));
// userInputNumber = parseInt(prompt('ex5: Enter a number'));
// console.log('ex5 prompt:',isEven(userInputNumber));

// let x = 5;
// console.log('x',x);
// function retVal(a,b){
//     x=6;
//     return a+b;
// }

// retVal(9,5);
// console.log('x',x);

