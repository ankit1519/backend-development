const http=require('http');
const fs= require ('fs');
const index=fs.readFileSync('index.html','utf-8')
const data=JSON.parse(fs.readFileSync('06_data.json','utf-8'))
//const product=data.products[0];

const product=data.products;
/*const data={
    n:"ankit",
    age:21
}*/

const server=http.createServer((req,res)=>{
    //console.log(req.url);
    console.log('server started');
    if(req.url.startsWith('/product')){
        console.log(req.url, req.method);
        const id=req.url.split('/')[2];
        //console.log(id);
        const prd=product.find(pr=>pr.id=== (+id));
        console.log(prd);
        res.setHeader('Content-Type','text/html')
        let idx=index.replace('**title**',prd.title)
                    .replace('**cost**',prd.price);
        res.end(idx)
        return;
    }
    /*switch (req.url) {
        case '/':
            res.setHeader('Content-Type','text/html')
            res.end(index)
            break;
        case '/demo':
            res.setHeader('Content-Type','application/JSON')
            res.end(JSON.stringify(data))
            break;
        /*case '/product':
            res.setHeader('Content-Type','text/html')
            let idx=index.replace('**title**',product.title);
            res.end(idx)
        break;
        default:
            res.writeHead(404,'not found')
            res.end()
            break;
    }*/
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
