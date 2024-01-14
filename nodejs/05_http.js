const http=require('http');
const fs= require ('fs');
const index=fs.readFileSync('index.html','utf-8')
const data=fs.readFileSync('06_data.json','utf-8')
/*const data={
    n:"ankit",
    age:21
}*/

const server=http.createServer((req,res)=>{
    //console.log(req.url);
    console.log('server started');

    switch (req.url) {
        case '/':
            res.setHeader('Content-Type','text/html')
            res.end(index)
            break;
        case '/demo':
            res.setHeader('Content-Type','application/JSON')
            res.end(data)
            break;
        default:
            res.writeHead(404,'not found')
            res.end()
            break;
    }
   // res.setHeader('Dummy','DummyValue Kuchh v');
   // res.end('<h1>Hello html</h1>')
   //res.end("hi")
   //res.setHeader('Content-Type','application/JSON')
   //res.end(JSON.stringify(data));
   //res.setHeader('Content-Type','text/html')
   // res.setHeader('Content-Type','application/JSON')
   //res.end(data)
});
server.listen(8080);
