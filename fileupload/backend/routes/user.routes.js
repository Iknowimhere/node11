import express from 'express'
import { register } from '../controllers/user.controllers.js'
import upload from '../middlewares/fileUpload.js'
let router=express.Router()

router.post("/",upload.single("image"),register)

export default router