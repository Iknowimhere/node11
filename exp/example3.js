// const express = require('express');
import express from 'express';
const app = express();

app.use((req, res, next) => {
  res.send('Stopped here');
});

app.get('/', (req, res) => {
  res.send('Should not reach here');
});

app.listen(3000,()=>{
    console.log("server is on 3000");
    
});
