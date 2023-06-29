const http = require('http');
const fs = require('fs');
const path = require('path');
const staticPath = path.join(__dirname, 'pages');

const PORT = process.env.PORT || 5300;
let globalResObject;

const server = http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type" : 'text/html'})

    // globalFun(req.url)
    //buffer the html pages
    let path = "./pages/";

    if(req.url == "/"){
        path += "index.html";
    }else if(req.url == "/services"){
        path += "services.html";
    }else if(req.url == "/contact"){
        path += "services.html";
    }
    else {
        path += "404.html";
    }

    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err);
            res.write(404);
        }else {
            console.log(" this is the page " +req.url);
            res.writeHead(200)
            res.write(data);
        }

        res.end();
    })

    /* 
    
    if (req.url.startsWith('/static/')) {
    const filePath = __dirname + req.url;
    fs.readFile(filePath, (err, data) => {
        if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
        } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
        }
  });
}

    
    
    */

});

function globalFun(url){
    globalResObject = url;
}

server.listen(PORT,()=>{
    console.log(`The request is listeningg to port ${PORT}`)
})