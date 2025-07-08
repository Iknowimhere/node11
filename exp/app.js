import express from 'express'
//creates an express application, app instance
let app=express()

app.get("/home",(req,res,next)=>{
    res.status(200).send("this is home page")
})

app.get("/about",(req,res,next)=>{
    res.status(200).send("this is about page")
})

export default app;