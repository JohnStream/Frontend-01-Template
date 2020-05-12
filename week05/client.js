const net = require('net');
let client = net.createConnection({
    port: 8080
}, () => {
    // TODO: 这里有LF和CRLF的区别
    console.log('服务器链接成功')
    client.write(`GET / HTTP/1.0\n\n`);
});
client.on('data', function (data) {
    console.log(data.toString());
    client.end();
});
client.on('end', function () {
    console.log('断开与服务器的连接');
});
client.on('error', (err) => {
    console.log(err)
})