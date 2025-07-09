import express from 'express'
let app=express()

// http://lcoalhost:3000/user/0
app.get('/user/:id', (req, res, next) => {
  if (req.params.id === '0') next('route')
  else next()
}, (req, res, next) => {
  res.send('regular')
})

app.get('/user/:id', (req, res, next) => {
  res.send('special')
})

app.listen(3000,()=>{
    console.log("server is on 3000...");
})

//name=tony&password=12

app.use(express.urlencoded())

app.get("/login",(req,res,next)=>{
    req.body.name
    req.body.password
    req.body={
        name:`tony`,
        password:12
    }

    console.log(req.cookie.token);
    
})