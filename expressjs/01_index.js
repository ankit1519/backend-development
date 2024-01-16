const express=require('express');
const fs=require('fs')
const server=express();
const data=JSON.parse(fs.readFileSync('01_data.json','utf-8'))
const product=data.products;
server.get('/',(req,res)=>{
    //res.send("Hello");
    //res.send('<h1>Ankit here</h1>')
    //res.sendFile(`C:\backend development\\nodejs\index.html`)
    //res.json(data);
   // res.sendStatus(404)
   //res.status(201).send("hi")
})
server.listen(8000,()=>{
    console.log("server started");
});