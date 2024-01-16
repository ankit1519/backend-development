const express=require('express');
const fs=require('fs')
const server=express();
const data=JSON.parse(fs.readFileSync('01_data.json','utf-8'))
const product=data.products;


//Middleware
//1. Logger
//-- application level middleware
server.use((req,res,next)=>{
    console.log(req.method,req.ip,req.hostname,new Date(),req.get('User-Agent'));
    next();
})

server.use(express.json());
//server.use(express.urlencoded());
const auth=(req,res,next)=>{
    if(req.body.password=='1234')
    {
        next();
    }else{
        res.sendStatus(401);
    }
    
}
//server.use(auth)

//API endpoint
server.get('/',auth,(req,res)=>{
    res.json({type:"GET"});
})
server.post('/',auth,(req,res)=>{
    res.json({type:"POST"});
})
server.patch('/',(req,res)=>{
    res.json({type:"PATCH"});
})
server.put('/',(req,res)=>{
    res.json({type:"PUT"});
})
server.delete('/',(req,res)=>{
    res.json({type:"DELETE"});
})
server.listen(8000,()=>{
    console.log("server started");
});