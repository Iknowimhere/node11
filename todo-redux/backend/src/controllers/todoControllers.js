const prisma=require("../config/db")
const postTodo=async(req,res)=>{
    let {task}=req.body
    try {
        let todo=await prisma.todo.create({
            data:{
                task
            }
        })
        res.json(todo)
    } catch (error) {
        res.json({message:"error creating todo"})
    }
}

const getTodos=async(req,res)=>{
    try {
        let todos=await prisma.todo.findMany()
        res.json(todos)
    } catch (error) {
        res.json({message:"error getting todos"})
    }
}

const getTodo=async(req,res)=>{
    let {id}=req.params;
    try {
        let todo=await prisma.todo.findFirst({
            where:{id:Number(id)}
        })
        res.json(todo)
    } catch (error) {
        res.json({message:"error getting todo"})
    }
}

const updateTodo=async(req,res)=>{
    let {id}=req.params;
    let {completed}=req.body
    try {
        let todo=await prisma.todo.update({
            where:{id:Number(id)},
            data:{
                completed:completed
            }
        })
        res.json(todo)
    } catch (error) {
        res.json({message:"error updating todo"})
    }
}

const deleteTodo=async(req,res)=>{
    let {id}=req.params;
    try {
        await prisma.todo.delete({
            where:{id:Number(id)}
        })
        res.json({message:"todo deleted"})
    } catch (error) {
        res.json({message:"error deleting todo"})
    }
}

module.exports={
    postTodo,
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo
}