import express from 'express'
let app=express()
import mongoose from 'mongoose'
import cors from 'cors'


//structured
//structure/schema--for the todos
let todoSchema=new mongoose.Schema({
    task:String,
    description:String,
    isCompleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

let Todo=mongoose.model("Todo",todoSchema)
//connection to database
mongoose.connect("mongodb://127.0.0.1:27017/todoDB").then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err.message);
})

app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json())

app.get("/todos",async (req,res,next)=>{
    let todos=await Todo.find()
    res.status(200).send(todos)
})


app.post("/todos",async (req,res,next)=>{
    let newTodo=await Todo.create(req.body)
   res.status(201).send(newTodo)
})

app.get("/todos/:id",async (req,res,next)=>{
    let {id}=req.params;
    let todo=await Todo.findById(id)
    res.status(200).send(todo)
})

app.put("/todos/:id",async(req,res,next)=>{

    let {id}=req.params;
    // {task?:"",description?:"",isCompleted?:true}
    let updatedTodo=await Todo.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send(updatedTodo)
})

app.delete("/todos/:id",async(req,res,next)=>{
    let {id}=req.params;
    await Todo.findByIdAndDelete(id)
    res.status(200).send({message:"Deleted successfully"})
})


export default app;