import { createServer } from "http";

//callback-req handler function
//req,res--objects
let server=createServer((req,res)=>{
    res.end("Hello world")
})

//starts a server so requests can be listened on specified port
server.listen(3000,()=>{
    console.log("Server on Port 3000...");
})


//http--default port -80
//https--default port -443