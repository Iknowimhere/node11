import express from 'express'
let app=express()

let todos=[
    {
        id:1,
        task:"read a book",
        description:"by 10/07/2025",
        isCompleted:false
    },
    {
        id:2,
        task:"water plants",
        description:"by 10/07/2025",
        isCompleted:false
    },
     {
        id:3,
        task:"water plants",
        description:"by 12/07/2025",
        isCompleted:false
    }
]

app.use(express.json())

app.get("/todos",(req,res,next)=>{
    res.status(200).send(todos)
})

app.post("/todos",(req,res,next)=>{
    let newTodo={...req.body,id:todos.length+1}
   todos.push(newTodo)
   res.status(201).send(newTodo)
})

//dynamic route
//req.params
// This property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.
app.get("/todos/:id",(req,res,next)=>{
    console.log(req.params.id);
    let todo=todos.find(doc=>doc.id===+req.params.id)
    res.status(200).send(todo)
})

app.put("/todos/:id",(req,res,next)=>{
    console.log(req.params.id);
    console.log(req.body);
    
    let todoIndex=todos.findIndex(doc=>doc.id===+req.params.id)
    let todo=todos[todoIndex]
    let updatedTodo={...todo,...req.body}
    todos[todoIndex]=updatedTodo
    res.status(200).send(todos)
})

app.delete("/todos/:id",(req,res,next)=>{
    console.log(req.params.id);
    let todoIndex=todos.findIndex(doc=>doc.id===+req.params.id)
    todos.splice(todoIndex,1)
    res.status(200).send(todos)
})


export default app;