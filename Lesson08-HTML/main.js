//useful array methods

let friutsArr = ['apple','sade','lulu','banana'];

friutsArr.forEach(function(item,index){
    console.log(item,index);
});

//forEach is void 
//good for actions on the array elements
// not for changing the array and getting a new one instead

let myNumbers = [1,2,3,4];

const myNewNumbers = myNumbers.map(function(item,index){
    item += 1;
    console.log(item,index);
    //return 'd';
    return item * 2;
});

console.log(myNewNumbers);
console.log(myNumbers);

//map retunr array that contain the results 
//good for actions on the array elements
//and for changing the array and getting a new one instead



//return all the items that are truethy to the condition
const filteredNumbers = myNewNumbers.filter(function(item){
    return item > 6;
});
console.log('filteredNumbers',filteredNumbers);


//return only the first item that is truethy to the condition
const foundNumbers = myNewNumbers.find(function(item){
    return item > 6;
});
console.log('foundNumbers',foundNumbers);

//return only the index of the first item that is truethy to the condition
const foundInNumbers = myNewNumbers.findIndex(function(item){
    return item > 6;
});
console.log('foundInNumbers',foundInNumbers);


//push add element to the end of the array
//return the new length of the array
let newLength = friutsArr.push('pear');
console.log(friutsArr);
console.log(newLength);

//unshift add element to the beginning of the array
//return the new length of the array
newLength = friutsArr.unshift('melon');
console.log(friutsArr);
console.log(newLength);

//push remove the last element of the array
//return the removed element
newLength = friutsArr.pop();
console.log(friutsArr);
console.log(newLength); 

//shift remove the last element of the array
//return the removed element
newLength = friutsArr.shift();
console.log(friutsArr);
console.log(newLength); 


//indexOf


