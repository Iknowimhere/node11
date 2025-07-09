import express from 'express'
let app=express()

let todos=[
    {
        task:"read a book",
        description:"by 10/07/2025",
        isCompleted:false
    },
    {
        task:"water plants",
        description:"by 10/07/2025",
        isCompleted:false
    },
    {
        task:"run 10k",
        description:"by 10/07/2025",
        isCompleted:false
    },
    {
        task:"buy groceries",
        description:"by 10/07/2025",
        isCompleted:false
    }
]


app.get("/todos",(req,res,next)=>{
    res.status(200).send(todos)
})

app.post("/todos",(req,res,next)=>{
    let newTodo={
        task:"play football",
        description:'outdoor',
        isCompleted:false
    }
   todos.push(newTodo)
   res.status(201).send(newTodo)
})


export default app;