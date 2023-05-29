import fs from 'fs';
import express from 'express';

const app = express();
app.use(express.json());

//FS
//------------
const readDataFile = (filePath)=>{
    return JSON.parse(fs.readFileSync(filePath,'utf8'));
};

const writeNewArrayToFile = (arr, path) => {
    fs.writeFile(path, JSON.stringify(arr), err=>{
        if(err) throw err;
    });
    console.log("Done writing"); // Success
  };
  

const addTodoToFile = (todoObj,filePath)=>{
    const todosArr = readDataFile(filePath);
    todosArr.push(todoObj);
    fs.writeFile(filePath,JSON.stringify(todosArr),err =>{
        if(err) throw err;
        console.log('new todo added');
    });
    return todosArr;
};


const updateFile = (id, filePath, updatedObj) => {
    const todosArr = readDataFile(filePath);
    const itemToBeUpdated = todosArr.findIndex(item => item.id === +id);
    const clone = [...todosArr];
    for (const key in updatedObj){
        clone[itemToBeUpdated][key] = updatedObj[key];
    }
    writeNewArrayToFile(clone, filePath);
    return clone;
}


const deleteTodoFromFile = (id, filePath) => {
    const todosArr = readDataFile(filePath);
    const itemToBeDeletedIndex = todosArr.findIndex((item) => item.id === +id);
    const clone = [...todosArr];
    clone.splice(itemToBeDeletedIndex, 1);
    writeNewArrayToFile(clone, filePath);
    return clone
  };
  



//--------

//EXPRESS
//----------
//GET ALL
app.get('/',(req,res)=>{
    console.log('3000');
    res.send(readDataFile('./todos.json'));
});

//GET SINGLE
app.get('/todo/:id',(req,res)=>{
    const todosArr = readDataFile('./todos.json');
    const id = parseInt(req.params.id);
    const selectedTodo = todosArr.find(item => item.id === id);
    res.send(selectedTodo);
})

//POST
app.post('/',(req,res)=>{
    console.log('body: ',req.body);
    const obj = {...req.body}
    if(Object.keys(obj).length===0){
        res.send('failed');
    }
    const newTodosArr = addTodoToFile(obj,'./todos.json');
    res.send(newTodosArr)
});

//PUT
app.put('/todo/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const obj = req.body;
    const newTodosArr = updateFile(id, './todos.json',obj);
    res.send(newTodosArr);
});

//DELETE
app.delete('/todo/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const newTodosArr = deleteTodoFromFile(id, './todos.json');
    res.send(newTodosArr);
});



//added routes
app.get('/count',(req,res)=>{
    const todosArr = readDataFile('./todos.json');
    const counting = todosArr.length;
    console.log(counting);
    res.send(`the number of tasks is ${counting}`);
});


//LISTEN
app.listen(3000, () => {
    console.log("app listening on port 3000");
  });
  
