const http = require('http')

let httpServer = http.createServer(
 (req, res) => {
    console.log('一次请求')
    console.log(req.headers)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hello World");
    res.end();
 }
).listen(8080);