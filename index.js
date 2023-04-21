const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');
var myname = os.hostname();
const server = http.createServer((req, res) => {
console.log(req.url);
  if(req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>hostname</title><meta http-equiv="refresh" content="3"></head>')
    res.write('<body style="background-color:khaki;"><h1 ><center>Hostname:  ')
    res.write(myname)
    res.end('</center></h1></body></html>');
    }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
