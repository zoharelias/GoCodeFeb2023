import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());


//Mongoose
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    rating: {
        rate: {
            type: Number,
        },
        count: {
            type: Number,
            default: 0,
        },
    },
});

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
const Product = mongoose.model("Product", productSchema);
//GET ALL
// app.get('/', async (req,res)=>{
//     const todos = await Todo.find({});
//     res.status(200).send(todos);
// });

app.get('/', async (req,res)=>{
    const products = await Product.find({});
    res.status(200).send(products);
});


//GET SINGLE
app.get("/todo/:id", async (req, res) => {
    const id = req.params.id;
    const todo = await Todo.findOne({ _id: id });
    console.log(todo);
    res.status(200).send(todo);
  
  });

  app.get("/product/:id", async (req, res) => {
    const id = req.params.id;
    const product = await Product.findOne({ _id: id });
    console.log(product);
    res.status(200).send(product);
  
  });

//POST
// app.post('/', async (req,res)=>{
//     try {
//         const obj = { ...req.body };
//         console.log(obj);
//         if(Object.keys(obj).length === 0){
//             res.send('failed');
//             return;
//         }
//         const todo = new Todo(obj);
//         await todo.save();
//         res.send(todo);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({message:error})
//     }
// });

app.post('/', async (req,res)=>{
    try {
        const obj = { ...req.body };
        console.log(obj);
        if(Object.keys(obj).length === 0){
            res.send('failed');
            return;
        }
        const product = new Product(obj);
        await product.save();
        res.send(product);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error})
    }
});


//PUT
app.put('/product/:id', async (req,res)=>{
    const userAllowedUpdates = ["title", "description", "price", "image", "category"]; //all the fields that I can change in put
                                                                                    //(I don't have to update all fields every time)
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every((update) =>
        userAllowedUpdates.includes(update)
    );
    if(!isValidOperation){
        res.status(400).send({message: "Invalid updates"});
    }
    try {
        const id = req.params.id;
        const product = await Product.findOne({_id:id});
        if(!product){
            res.status(404).send({message: "product does not exist"});
        }
        updates.forEach((update)=> product[update]= req.body[update]);
        await product.save();
        res.status(200).send(product);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error});
    }
});

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
app.delete("/product/:id/", async (req, res) => {
    const id = req.params.id;
    const deletedProduct = await Product.findOneAndDelete({_id:id})
  
    if (!deletedProduct) {
      res.status(404).send({message: "product does not exist"});
    }
      res.status(200).send(deletedProduct);
  });
  
  app.delete("/todo/:id/", async (req, res) => {
    const id = req.params.id;
    const deletedTodo = await Todo.findOneAndDelete({_id:id})
  
    if (!deletedTodo) {
      res.status(404).send({message: "todo does not exist"});
    }
      res.status(200).send(deletedTodo);
  });
  
  

  //Add bulk from JSON
  app.post('/json/', async (req,res)=>{
    try {
        const objArray = req.body;
        console.log(objArray.length);
        objArray.forEach(async (obj)=>{
            //console.log(obj['title']);
            const product = new Product(obj);
            await product.save();
        });
        res.status(200).send('done');
    } catch (error) {
        console.log('ERROR',error);
        //res.status(500).send({message:error})
    }
});



//--------





//Connect to DB
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/gocode-shop");
  }
  
  main().catch((err) => console.log(err));
  


//LISTEN
app.listen(8000, () => {
    console.log("app listening on port 8000");
  });
  
