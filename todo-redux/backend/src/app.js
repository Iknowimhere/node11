const express=require("express")
let app=express()
const todoRoutes=require("./routes/todoRoutes")
const cors=require("cors")

app.use(express.json())
app.use(cors()) 
app.use("/todos",todoRoutes)

module.exports=app;