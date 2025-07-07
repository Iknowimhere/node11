fetch("http://localhost:5000/").then(res=>{
    return res.json()
}).then(data=>{
    console.log(data);
})