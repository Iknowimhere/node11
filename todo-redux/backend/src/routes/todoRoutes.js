const express =require("express")
const { getTodos, postTodo, getTodo, updateTodo, deleteTodo } = require("../controllers/todoControllers")
let router=express.Router()


router.get("/",getTodos)
router.post("/",postTodo)
router.get("/:id",getTodo)
router.put("/:id",updateTodo)
router.delete("/:id",deleteTodo)



module.exports=router;