const net = require('net');
// let str = 'Host: localhost:8080\r\n' + 'Accept: text/plain\r\n' + 'accept-encoding: gzip, deflate, br\r\n' + 'content-length: 3\r\n'
let header = {
    'Host': 'localhost:8080\r\n',
    'Accept': 'accept-encoding: gzip, deflate, br\r\n',
    'content-length': '3\r\n'
}
let test = Object.keys(header).map((key) => {
    return key + ': ' + header[key]
}).join('')
console.log(test)
console.log(typeof test)
let client = net.createConnection({
    port: 8080
}, () => {
    // TODO: 这里有LF和CRLF的区别
    console.log('服务器链接成功')
    client.write('GET / HTTP/1.1\r\n' + test + '\r\n' + '123');
});
client.on('data', function (data) {
    // console.log(data.toString());
    client.end();
});
client.on('end', function () {
    console.log('断开与服务器的连接');
});
client.on('error', (err) => {
    console.log(err)
})