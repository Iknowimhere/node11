// const express = require('express');
import express from 'express'
const app = express();

app.use((req, res, next) => {
  console.log('First');
  next();
});

app.get('/', (req, res, next) => {
  console.log('Second');
  next();
}, (req, res) => {
  console.log('Third');
  res.send('Done');
});

app.listen(3000);
