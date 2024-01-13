const fs=require('fs');
const t1=performance.now();
//const text=fs.readFileSync('04_demo.txt','utf-8');
fs.readFile('04_demo.txt','utf-8',(err,text)=>console.log(text));
const t2=performance.now();
console.log("i come last");
console.log(t2-t1);
console.log('end');