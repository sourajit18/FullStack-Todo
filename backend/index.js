const express=require("express");
const {createTodo, updateTodo}=require("./types");
const {todos} = require("./mongodb");``
const cors=require("cors")
const app=express();
app.use(cors())
app.use(express.json())

app.get("/get_todos",async (req,res)=>{
const todoList = await todos.find();
res.send({todoList})
})


app.post("/add_todo",async (req,res)=>{
const newTodo = req.body;
const parsedTodo = createTodo.safeParse(newTodo);
if(!parsedTodo.success) {
    res.status(411).send({
        message: "Invalid Input"
})
    return;
}
const createdTodo= await todos.create({
    title:newTodo.title,
    description:newTodo.description,
    completed:false
})
res.status(200).send({
    message : "Todo has been added! Please keep the ID handy to track the Todo",
    id : createdTodo._id
})
})

app.put("/todo_status", async (req,res)=>{
const todoID= req.body;
const parsedID = updateTodo.safeParse(todoID);
if(!parsedID.success){
    res.status(411).send({
        message : "Invalid ID"
    })
    return;
}
await todos.update({_id:todoID},{
    completed:true
})
res.send({
    messsage : "Todo has been marked completed"
})
})
app.listen(3000);