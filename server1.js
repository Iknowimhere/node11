import { createServer } from "http";
import fs from "fs";
import {parse} from 'querystring'
import { MongoClient } from "mongodb";

let server = createServer((req, res) => {
  if(req.method==="POST"){
    if(req.headers["content-type"]==="application/x-www-form-urlencoded"){
        let data=""
        req.on("data",(chunk)=>{
            data+=chunk;
        })
        req.on("end",async ()=>{
            console.log(parse(data)); 

            let client=new MongoClient("mongodb://127.0.0.1:27017")
            await client.connect()
            const db = await client.db("feedbackDB");
            const collection = await db.collection('feedback');
            await collection.insertOne(parse(data))
            
            res.end("<h1>Thank you for contacting us! We'll get in touch with you..</h1>");
        })
    }else{
        res.end("Invalid data")
    }
    
  }else{
    if (req.url === "/") {
    res.writeHead(200, "Ok", { "content-type": "text/html" });
    let html = fs.readFileSync("./home.html", "utf-8");
    res.end(html);
    
  } else if (req.url === "/about") {
    res.writeHead(200, "Ok", { "content-type": "text/html" });
    let html = fs.readFileSync("./about.html", "utf-8");
    res.end(html);

  } else if (req.url === "/css") {
    res.writeHead(200, "Ok", { "content-type": "text/css" });
    let css = fs.readFileSync("./style.css", "utf-8");
    res.end(css);

  } else if (req.url === "/contact") {
    res.writeHead(200, "Ok", { "content-type": "text/html" });
    let html = fs.readFileSync("./contact.html", "utf-8");
    res.end(html);

  } else {
    res.writeHead(404, "not found", { "content-type": "text/plain" });
    res.end("Page not found");
  }
  }
});

//starts a server so requests can be listened on specified port
server.listen(3000, () => {
  console.log("Server is running on Port 3000...");
});
