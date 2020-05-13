const http = require('http')
let httpServer = http.createServer(
 (req, res) => {
    let  body = "";
    console.log(req.headers)
    req.on('data', function (chunk) {
      body += chunk;
    });
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hello World");
    req.on('end', () => {
       console.log(body)
       res.end()

    })
 }
).listen(8080);