import express from "express"

const app=express();

app.get('/',(req,res)=>{
    res.send("<h1>Helooooow World </h1>")
})

app.get('/about',(req,res)=>{
    res.send("about")
})

app.listen(4000,()=>{
    console.log("App started on port 4000")
})

