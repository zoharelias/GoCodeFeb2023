import mongoose from 'mongoose';
import express from 'express';

const app = express();
app.use(express.json());


//Mongoose
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});

const Todo = mongoose.model("Todo", todoSchema);

//GET ALL
app.get('/', async (req,res)=>{
    const todos = await Todo.find({});
    res.status(200).send(todos);
});


//GET SINGLE
app.get("/todo/:id", async (req, res) => {
    const id = req.params.id;
    const todo = await Todo.findOne({ _id: id });
    console.log(todo);
    res.status(200).send(todo);
  
  });

//POST
app.post('/', async (req,res)=>{
    try {
        const obj = { ...req.body };
        console.log(obj);
        if(Object.keys(obj).length === 0){
            res.send('failed');
            return;
        }
        const todo = new Todo(obj);
        await todo.save();
        res.send(todo);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error})
    }
});


//PUT
app.put('/todo/:id', async (req,res)=>{
    const userAllowedUpdates = ["title", "description", "isCompleted"];
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every((update) =>
        userAllowedUpdates.includes(update)
    );
    if(!isValidOperation){
        res.status(400).send({message: "Invalid updates"});
    }
    try {
        const id = req.params.id;
        const todo = await Todo.findOne({_id:id});
        if(!todo){
            res.status(404).send({message: "todo does not exist"});
        }
        updates.forEach((update)=> todo[update]= req.body[update]);
        await todo.save();
        res.status(200).send(todo);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error});
    }
});

//DELETE
app.delete("/todo/:id/", async (req, res) => {
    const id = req.params.id;
    const deletedTodo = await Todo.findOneAndDelete({_id:id})
  
    if (!deletedTodo) {
      res.status(404).send({message: "todo does not exist"});
    }
      res.status(200).send(deletedTodo);
  });
  
  

//--------

//DELETE
// app.delete('/todo/:id',(req,res)=>{
//     const id = parseInt(req.params.id);
//     const newTodosArr = deleteTodoFromFile(id, './todos.json');
//     res.send(newTodosArr);
// });



//added routes
// app.get('/count',(req,res)=>{
//     const todosArr = readDataFile('./todos.json');
//     const counting = todosArr.length;
//     console.log(counting);
//     res.send(`the number of tasks is ${counting}`);
// });


//Connect to DB
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/todos");
  }
  
  main().catch((err) => console.log(err));
  


//LISTEN
app.listen(3000, () => {
    console.log("app listening on port 3000");
  });
  
