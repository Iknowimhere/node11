const express=require("express")
let app=express()
const todoRoutes=require("./routes/todoRoutes")

app.use(express.json())
app.use("/todos",todoRoutes)

module.exports=app;