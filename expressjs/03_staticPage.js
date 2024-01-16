const express=require('express');
const fs=require('fs')
const server=express();





server.use((req,res,next)=>{
    console.log(req.method,req.ip,req.hostname,new Date(),req.get('User-Agent'));
    next();
})
//static middleware
server.use(express.static('public'));

server.listen(8000,()=>{
    console.log("server started");
});