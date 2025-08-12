import { config } from "dotenv";
config()
import multer from "multer";
import {CloudinaryStorage} from 'multer-storage-cloudinary'
import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret:process.env.API_SECRET
});

let storage=new CloudinaryStorage({
    cloudinary,
    params:{
        folder:"fileupload"
    }
})

let upload=multer({storage:storage})

export default upload