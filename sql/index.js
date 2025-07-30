import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
let app=express();
import {Client} from 'pg'
let pgClient=new Client(process.env.PG_URL)

app.use(express.json())
pgClient.connect()

app.post("/users",async(req,res,next)=>{
    let {username,email,city}=req.body
    pgClient.query("BEGIN;")
    let userRes=await pgClient.query(`insert into users(username,email) values($1,$2) returning id`,[username,email])
    let id=userRes.rows[0].id
    await pgClient.query(`insert into address(user_id,city) values($1,$2);`,[id,city])
    pgClient.query("COMMIT;")
    res.json({message:"registered successfully"})
})

app.get("/usersdata",async(req,res)=>{
    let userandAddressData=await pgClient.query(`Select u.username,u.email,a.city from users u join address a on u.id=a.user_id`)
    res.json({data:userandAddressData.rows})
})



app.listen(5000,()=>{
    console.log("server on 5000");
})