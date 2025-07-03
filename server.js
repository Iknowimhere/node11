import { createServer } from "http";

let server=createServer((req,res)=>{
    res.end("Hello world")
})

server.listen(3000,()=>{
    console.log("Server on Port 3000...");
})