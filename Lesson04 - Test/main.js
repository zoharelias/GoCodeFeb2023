// //TEST
// // 1
//כתבו פונקציה המקבלת שני מספרים ומציגה את המספר הגדול מבינהם והריצו אותה
// 
// function showBiggerNumber(firstNumber,secondNumber){
//     console.log('Got 2 numbers:', firstNumber + ' and ' + secondNumber);
//     if(firstNumber > secondNumber){
//         console.log('Bigger number is:',firstNumber);;
//     } else {
//         console.log('Bigger number is:',secondNumber);
//     }
// }

// showBiggerNumber(15,5);



//2
// כתבו את אותה הפונקציה אך הפעם קלטו את שני המספרים בתוכנית ע״י שימוש ב
// prompt, 
// והריצו אותה
// function showBiggerNumber(firstNumber,secondNumber){
//     console.log('Got 2 numbers:', firstNumber + ' and ' + secondNumber);
//     if(firstNumber > secondNumber){
//         console.log('Bigger number is:',firstNumber);;
//     } else {
//         console.log('Bigger number is:',secondNumber);
//     }
// }
// const promptFirstNumber = parseInt(prompt('Enter the first number'));
// const promptSecondNumber = parseInt(prompt('Enter the second number'));
// showBiggerNumber(promptFirstNumber,promptSecondNumber);





// 3//
// כתבו פונקציה המקבלת שני מספרים, 
// ותו שיגדיר מה לבצע עליהם (*, /, +)
// והציגו תשובה מתאימה. 
// הריצו את הפונקציה מהתוכנית ע״י 3 קלטים
// function getTwoNumbersAndSign(firstNumber,secondNumber,operationSign){
//      console.log('Got 2 numbers and operation sign, the exercise is:', firstNumber + ' ' + operationSign + ' ' + secondNumber);
//     if(operationSign === '+'){
//         console.log('the result is ', firstNumber + secondNumber);
//     } else if(operationSign === '*'){
//         console.log('the result is ', firstNumber * secondNumber);
//     } else if(operationSign === '/'){
//         console.log('the result is ', firstNumber / secondNumber);
//     } else {
//         console.log('INPUT ERROR:','please select from + * / only');
//     }
// }

// const promptFirstNumber = parseInt(prompt('Enter the first number'));
// const promptSign = prompt('Enter the operation');
// const promptSecondNumber = parseInt(prompt('Enter the second number'));
// getTwoNumbersAndSign(promptFirstNumber,promptSecondNumber,promptSign);

// //4
/*
כתבו פונקציה המקבלת שני מספרים ומציגה את סכומם 
ופונקציה אחרת המקבלת שני מספרים ומציגה את מכפלתם. 
התוכנית תחליט איזו פונקציה להריץ לפי קלט מהמשתמש
*/ 
// function addTwoNumbers(firstNumber,secondNumber){
//     console.log(firstNumber + ' + ' + secondNumber + ' =', firstNumber + secondNumber);
// }

// function multiplyTwoNumbers(firstNumber,secondNumber){
//     console.log(firstNumber + ' * ' + secondNumber + ' =', firstNumber * secondNumber);
// }

// const operation = prompt('Enter + or *');
// if(operation === '+'){
//     addTwoNumbers(4,5);
// } else if (operation === '*') {
//     multiplyTwoNumbers(4,5);
// } else {
//     console.log('INPUT ERROR:', 'please enter = or * only');
// }



