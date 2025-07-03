//sync(blocking code) vs async (non blocking code)
//fs module gives us utilities to deal with file system
// import fs from 'fs';

// console.log("hello");
// let data=fs.readFileSync("./index.txt")
// console.log(data.toString());
// console.log("bye");


//callbacks
import fs from 'fs'

// console.log("hello");
fs.readFile("./index.txt",(err,data)=>{
    if(err)
        console.log(err);
    console.log(data.toString());
})
// console.log("bye");

fs.writeFile("./demo.txt","hello",(err)=>{
    if(err)
        console.log(err);
    console.log("file created/written");
})

//promises
// import fs from 'fs/promises'

// fs.readFile("./index.txt").then((data)=>{
//     console.log(data.toString());
// }).catch((err)=>{
//     console.log(err);
// })



// async function getData(){
//     try {
//         let data=await fs.readFile("./index.txt")
//         console.log(data.toString());
//     } catch (error) {
//         console.log(error);
//     }
// }
// getData()


// fs.unlink
// fs.mkdir
// fs.rmdir
// fs.appendFile