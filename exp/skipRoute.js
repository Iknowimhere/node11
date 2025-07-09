// const express = require('express');
import express from 'express'
const app = express();

app.use("/",(req, res, next) => {
  console.log('Middleware1');
  next('route');
},(req,res,next)=>{
    console.log('middleware2');
    next()
})

//skips 
app.get('/', (req, res) => {
  res.send('Route A');
});

//prints
app.get('/', (req, res) => {
  res.send('Route B');
});

app.listen(3000,()=>console.log('server is on 3000'))
