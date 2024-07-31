const http = require('http')

// let countHome = 0
 
const server =  http.createServer((request, response) =>{
  let countHome = 0
  // countHome++
  if(request.url === "/home" || request.url === "/"){
    // countHome++
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8;"});
    response.write("<h2>Home</h2>");
    response.write('<a href="/about">About</a>');
    // countHome++ 
    // console.log(countHome)
    // response.write(`<h2>${countHome}</h2>`);
    
  }
  else if(request.url == "/about"){
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8;"});
    response.write("<h2>About</h2>");
    response.write('<a href="/">Home</a>');

  }
  else{
    response.writeHead(404, {"Content-Type": "text/html; charset=utf-8;"});
    response.end("<h2>Not found</h2>");
  }
  
})

const port = 3000

server.listen(port);
