import { config } from 'dotenv';
config()
import express from 'express'
import connectDB from './config/db.js';
connectDB()
const app = express();
const PORT = process.env.PORT || 3000;
import cors from 'cors'
import userRoutes from './routes/user.routes.js'
import globalErrorHandler from './middlewares/globalErrorHandler.js';

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/users",userRoutes)

app.all('*', (req, res,next) => {
  let err=new Error(`${req.originalUrl} this path is not implemented!!`)
  err.status=404
  throw err;
});

app.use(globalErrorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
