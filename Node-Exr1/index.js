import { log } from 'console';
import fs from 'fs';


const todos = JSON.parse(fs.readFileSync('./todos.json','utf8'));
// console.log('todos.length',todos.length);
// console.log(process.argv);
// console.log(process.argv.length);
// console.log(process.argv[2]);

let newLength = todos[todos.length-1]['id'] + 1;
console.log( `newLength`,newLength);
const newTodo = {
    "id" : newLength ,
    "title" : `almog${newLength}`,
    "description": `something here${newLength}`,
    "isCompleted": false,
};

//console.log('todos.length',todos.length);


switch(process.argv[2]){
    case 'help':
        const helpText = fs.readFileSync('./help.txt', 'utf8');
        //const helpText = 'HELP';
        console.log(helpText);
        break;
    case 'template':
        
        todos.push(newTodo);
        fs.writeFile('todos.json',JSON.stringify(todos), err => {
            if(err) throw err;
            console.log('new todo added');
        });
                break;
    case 'add':
        newTodo['title'] = process.argv[3];
        newTodo['description'] = process.argv[4];
        todos.push(newTodo);
        fs.writeFile('todos.json',JSON.stringify(todos), err => {
            if(err) throw err;
            console.log('new todo added');
        });
        break;
    case 'delete':
        const idToDel = parseInt(process.argv[3]);
        console.log(`delete ${idToDel}`);
        const todosAfterDelete = todos.filter((sngl)=>{
            return sngl['id'] !== idToDel; 
        });
        //console.log(todosAfterDelete); 
        fs.writeFile('todos.json',JSON.stringify(todosAfterDelete), err => {
            if(err) throw err;
            console.log(`selected todo id ${idToDel} deleted`);
        });
        break;
    case 'update':
        break;
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
    case 'complete':
        break;
    default:
        console.log('Not as expected');
}