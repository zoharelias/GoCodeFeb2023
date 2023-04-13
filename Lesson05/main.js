// // //Strings
// // // 1
// /*
// 1. כתבו פונקציה
// last2(str) 

// שתחזיר את שני התווים האחרונים של המחרוזת
// str. 
// השתמשו בתוכנית בפונקציה הנ״ל. 

// */
//  function last2(str){
//     return(str.slice(-2));
// }
// console.log(last2('abcde'));
// const input1 = prompt('EX1: Enter a string');
// console.log('you entered ' + input1 + '. the last 2 characters of it are:',last2(input1));

// // //2
// /*
// 2. כתבו פונקציה שמקבלת מחרוזת,
//  ומציגה כל פעם תו אחד מתוך המחרוזת
//   (בשורה נפרדת ב
//      console).  
//      בתוכנית קלטו מחרוזת והריצו את הפונקציה עליה. 
// */
// function showVerticalString(str){
//     for(let i=0 ; i<=str.length-1 ; i++){
//         console.log(str[i]);
//     }
// }
// const input2 = prompt('EX2: Enter a string');
// console.log('you entered ' + input2 + '. Now watch it vertically');
// showVerticalString(input2);

// // 3//
// /*
// 3. כתבו פונקציה המקבלת שני פרמטרים - מחרוזת ותו.
// הפונקציה סופרת כמה פעמים התו מופיע במחרוזת ומחזירה מספר זה. 
// לדוגמא, עבור
// : 'w3resource.com', 'o' 
// הפונקציה תחזיר: 2 

// השתמשו בתוכנית בפונקציה הנ״ל. 
// */
// function countHowManyTimes(string,character){
//     let counter = 0;
//     for(let i=0 ; i <= string.length-1 ; i++ ){
//         if(character === string[i]){
//             counter++;
//         }
//     }
//     return counter;
// }

// const input3string = prompt('EX3: Enter a string');
// const input3character = prompt('EX3: Enter a character');
// console.log(input3character + ' appear in ' + input3string + ' ' + countHowManyTimes(input3string,input3character) + ' times');

// // //4
// /*
// 4. 
// כתבו פונקציה המקבלת שתי מחרוזות ומחזירה את השילוב של שתיהן, אחת בתוך השנייה.  
// לדוגמא: עבור המחרוזת
// abc 
// והמחרוזת
// def 
// יוחזר: 
// adbecf. 
// הניחו כי שתי המחרוזות זהות בגודלן.  
// השתמשו בלולאת
// for. 
// השתמשו בתוכנית בפונקציה הנ״ל. 
// */
// function combineTwoIdenticalLentghStrings(firstString,secondString){
//     let combinedString = '';
//     for(let i=0 ; i <= firstString.length-1 ; i++){
//         combinedString += firstString[i] + secondString[i]
//     }
//     return combinedString;
// }
// const input4string1 = prompt('EX4: Enter first string');
// const input4string2 = prompt('EX4: Enter second string, same length as first string');
// console.log('The combination of ' + input4string1 + ' and ' + input4string2 + ' is: ' + combineTwoIdenticalLentghStrings(input4string1,input4string2));


// // //5
// /*
//   5.
//   בצעו שוב את התרגיל הקודם וקחו בחשבון מצבים בהם גודל המחרוזות אינו זהה.
//    בכל מקרה, עליכם להציג את כל התווים הקיימים. 
// */
// function combineTwoStrings(firstString,secondString){
//     let combinedString = '';
//     let shorterString = 0;
//     let longerString = '';
//     if(firstString.length < secondString.length){
//         shorterString = firstString.length;
//         longerString = secondString;
//     } else {
//         shorterString = secondString.length;
//         longerString = firstString;
//     }
//     for(let i=0 ; i <= shorterString-1 ; i++){
//         combinedString += firstString[i] + secondString[i]
//     }
//     combinedString += longerString.slice(shorterString);
//     return combinedString;
// }
// const input5string1 = prompt('EX5: Enter first string');
// const input5string2 = prompt('EX5: Enter second string');
// console.log('The combination of ' + input5string1 + ' and ' + input5string2 + ' is: ' + combineTwoStrings(input5string1,input5string2));


// // //6
// /*
// כתבו פונקציה 
// unique(str) 
// שתחזיר את התווים הייחודיים של
// str
// בלבד. ללא חזרות. 
// לדוגמא, עבור המחרוזת  
// thequickbrownfoxjumpsoverthelazydog 
// תוחזר המחרוזת 
// thequickbrownfxjmpsvlazydg
// thequickbrownfxjmpsvlazydg 
// */
// function returnOneCharOfEachLetter(stringToCheck){
//     let stringToReturn = '';
//     for(let i=0 ; i <= stringToCheck.length-1 ; i++){
//         if(stringToReturn.indexOf(stringToCheck[i])=== -1){
//             stringToReturn += stringToCheck[i];
//         }
//     }
//     return stringToReturn;
// }
// console.log('EX6: for "thequickbrownfoxjumpsoverthelazydog" we get' ,returnOneCharOfEachLetter('thequickbrownfoxjumpsoverthelazydog'));
// const input6 = prompt('EX6: Enter string');
// console.log('The output ' + input6 + ' is ' + returnOneCharOfEachLetter(input6));


// //7
// /**
//  * כתבו פונקציה המקבלת מחרוזת ומחזירה את התו הראשון שהופיע רק פעם אחת. 
// לדוגמא, עבור
// 'abacddbecg', 
// יוחזר התו
// 'e'. 
// */

// function returnFirstSoloCharacter(stringToCheck){
//     for(let i=0 ; i <= stringToCheck.length -1 ; i++){
//         if(countHowManyTimes(stringToCheck,stringToCheck[i]) === 1){ //הפונקציה מתרגיל 3
//             return stringToCheck[i];
//         }
//     }
//     return 'no character is single';
// }
// const input7 = prompt('EX7: Enter string');
// console.log('The first solo charcter of ' + input7 + ' is ' + returnFirstSoloCharacter(input7));


//Custom functions
//charAt()
function charAtCustom(stringToCheck,placeInString){
    if(placeInString < stringToCheck.length){
        return stringToCheck[placeInString];
    } else {
        return "";
    }
}
console.log(charAtCustom('abcde',0));
console.log(charAtCustom('abcde',1));
console.log(charAtCustom('abcde',2));
console.log(charAtCustom('abcde',3));
console.log(charAtCustom('abcde',4));
console.log(charAtCustom('abcde',5));

//endsWith
function endsWithCustom(stringToCheck,subString){
    
}