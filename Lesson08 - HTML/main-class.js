const person = {
    name:'Bob',
    age:29,
    job: {
        title: 'ceo',
        salary: 50000
    },
    sayHello: function(){
        console.log('Hello');
    },
    returnMyNameAndAge: function(){
        return this.name + this.age;
    }
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person['job']['salary']);
console.log(person['name']);
console.log(person['name']);
console.log(person['job'].title);
console.log(person.job.title);
console.log(person.job['salary']);
console.log(person.returnMyNameAndAge());


printFromObj('job','salary');

function printFromObj(key1,key2){
    console.log(person[key1][key2]);
}

person.lastName = 'ddd';

console.log(person.lastName);

console.log('FOR IN LOOP:');
for(const key in person){
    console.log(key + ": " + person[key])
}


//arrays
const arrNumbers = [1,2,3,4,5,6];
const arrStrings = ['avraham','itshak','yaakov'];
const arrMixed =[1,'a',{},44,'ttt',{name:'david'}]
const arrObjects = [
    { name: 'asad'},
    { name: 'asad'},
    { name: 'asad'},
    { name: 'asad'},
    { name: 'asad'},
]
const arrArrays = 

console.log(arrStrings[0]);
console.log(arrStrings[0][2]);



