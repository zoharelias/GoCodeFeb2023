import { log } from 'console';
import fs from 'fs';
import { argv } from 'process';


const todos = JSON.parse(fs.readFileSync('./todos.json','utf8'));

let newId = todos[todos.length-1]['id'] + 1; //take the last todo id and add 1 to it
const newTodo = {
    "id" : newId ,
    "title" : `almog${newId}`,
    "description": `something here${newId}`,
    "isCompleted": false,
};

switch(process.argv[2]){
    //showing help about the program
    case 'help': 
        const helpText = fs.readFileSync('./help.txt', 'utf8');
        console.log(helpText);
        break;
    //adding a template todo, no arguments needed
    case 'template': 
        todos.push(newTodo);
        fs.writeFile('todos.json',JSON.stringify(todos), err => {
            if(err) throw err;
            console.log('new todo added');
        });
                break;
    //adding a todo with arguments
    case 'add': 
        newTodo['title'] = process.argv[3];
        newTodo['description'] = process.argv[4];
        todos.push(newTodo);
        fs.writeFile('todos.json',JSON.stringify(todos), err => {
            if(err) throw err;
            console.log('new todo added');
        });
        break;
    //deleting a todo by its id
    case 'delete': 
        const idToDel = parseInt(process.argv[3]);
        console.log(`delete ${idToDel}`);
        const todosAfterDelete = todos.filter((sngl)=>{
            return sngl['id'] !== idToDel; 
        });
        fs.writeFile('todos.json',JSON.stringify(todosAfterDelete), err => {
            if(err) throw err;
            console.log(`selected todo id ${idToDel} deleted`);
        });
        break;
    //update a todo's is completed by its id and true/false
    case 'update': 
        const idToUpdate = parseInt(process.argv[3]);
        console.log(`update ${idToUpdate}`);
        const todoToUpdate = todos.findIndex((sngl)=>{
            return sngl['id'] === idToUpdate; 
        });
        if(todoToUpdate === -1){
            console.log(`The id you entered (${idToUpdate}) does not exist`);
            break;
        }
        console.log(todoToUpdate);
        const bool_value = process.argv[4] == "true" ? true : false //convert 'true' to true, 'false' to false
        todos[todoToUpdate].isCompleted = bool_value;
        fs.writeFile('todos.json',JSON.stringify(todos), err => {
            if(err) throw err;
            console.log(`selected todo id ${idToUpdate} updated`);
        });
        break;
    //read a single todo by its id and show it
    case 'read':
        const idToRead = parseInt(process.argv[3]);
        console.log(`read ${idToRead}`);
        const todoToRead = todos.find((sngl)=>{
            return sngl['id'] === idToRead; 
        });
        if(todoToRead === undefined){
            console.log(`The id you entered (${idToRead}) does not exist`);
            break;
        }
        console.log(`todoToRead: ${todoToRead}`);
        console.log(`id: ${todoToRead.id}`);
        console.log(`title: ${todoToRead.title}`);
        console.log(`description: ${todoToRead.description}`);
        console.log(`isCompleted: ${todoToRead.isCompleted}`);
       break;
    default:
        console.log('Not as expected');
}