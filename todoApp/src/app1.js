import express from 'express'
let app=express()
import mongoose from 'mongoose'

// let todos=[
//     {
//         id:1,
//         task:"read a book",
//         description:"by 10/07/2025",
//         isCompleted:false
//     },
//     {
//         id:2,
//         task:"water plants",
//         description:"by 10/07/2025",
//         isCompleted:false
//     },
//      {
//         id:3,
//         task:"water plants",
//         description:"by 12/07/2025",
//         isCompleted:false
//     }
// ]

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

//createdAt
//updatedAt
app.use(express.json())

app.get("/todos",async (req,res,next)=>{
    let todos=await Todo.find()
    res.status(200).send(todos)
})


app.post("/todos",async (req,res,next)=>{
    let newTodo=await Todo.create(req.body)
   res.status(201).send(newTodo)
})

//dynamic route
//req.params
// This property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.
app.get("/todos/:id",(req,res,next)=>{
    // console.log(req.params.id);
    // let todo=todos.find(doc=>doc.id===+req.params.id)
    // res.status(200).send(todo)
    // Todo.findById
})

app.put("/todos/:id",(req,res,next)=>{
    // console.log(req.params.id);
    // console.log(req.body);
    
    // let todoIndex=todos.findIndex(doc=>doc.id===+req.params.id)
    // let todo=todos[todoIndex]
    // let updatedTodo={...todo,...req.body}
    // todos[todoIndex]=updatedTodo
    // res.status(200).send(todos)
    // Todo.findByIdAndUpdate
})

app.delete("/todos/:id",(req,res,next)=>{
    // console.log(req.params.id);
    // let todoIndex=todos.findIndex(doc=>doc.id===+req.params.id)
    // todos.splice(todoIndex,1)
    // res.status(200).send(todos)
    // Todo.findByIdAndDelete   
})


export default app;