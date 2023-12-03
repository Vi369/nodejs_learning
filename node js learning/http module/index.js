const http = require('http');


const server = http.createServer((req, res)=>{
    if(req.url =="/"){
        res.write("<h1>Hello node js</h1>")
    }
    else if(req.url=="/about"){
        res.write("<h1>Hello Vikas jii</h1>")
    }
})

server.listen(5010, ()=>{
    console.log("server is running ")
})
