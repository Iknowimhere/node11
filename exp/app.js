import express from 'express'
//creates an express application, app instance
let app=express()

//middlewares
function parse(req,res,next){
    console.log("parse function");
    next()
}
function auth(req,res,next){
    console.log("auth function");
    next()
}

// app.use(parse)
// app.use(function(req,res,next){
//     console.log("parse function");
//     next()
// })
// app.use(auth)
// app.get("/home",parse,auth,routeFunction)


let middlewareStack=[parse,auth]

app.get("/home",middlewareStack,function (req,res,next){
    res.status(200).send("this is home page")
})


export default app;