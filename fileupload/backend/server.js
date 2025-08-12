import { config } from 'dotenv';
config()
import express from 'express'
import connectDB from './config/db.js';
connectDB()
const app = express();
const PORT = process.env.PORT || 3000;
import cors from 'cors'
import userRoutes from './routes/user.routes.js'

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.use("/users",userRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
