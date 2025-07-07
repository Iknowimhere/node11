import http from "http";

let server = http.createServer((req, res) => {
  let students = [
    {
      name: "akash",
      grade: 5,
    },
    {
      name: "bhoomi",
      grade: 4,
    },
    {
      name: "chethan",
      grade: 7,
    },
  ];
  res.writeHead(200,'okay',{"content-type":'application/json',
// "Access-Control-Allow-Origin":'http://127.0.0.1:5500' 
    "Access-Control-Allow-Origin":'*' //whitelisting every origin
  })
  res.end(JSON.stringify(students));
});

server.listen(5000,()=>{
    console.log("this runs on 5000");
})