process.nextTick(()=>{
    console.log("process.nextTick callback 1"); 
})

Promise.resolve().then(()=>{
    console.log("Promise callback 1");
})


setTimeout(()=>{
    console.log("hello");
},0)

setTimeout(()=>{
    console.log("hello 2");
    
},0)

import fs from 'fs';

fs.readFile("./index.js","utf-8",()=>{
    console.log("file read");
})

setImmediate(()=>{
    console.log("this is check queue callback");
    
})

let readStream=fs.createReadStream("./index.js","utf-8")


readStream.close(()=>{
    console.log("close queue callback ");
})