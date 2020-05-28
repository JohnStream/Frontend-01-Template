const net = require('net');

function transforHeader(headers) {
    let test = Object.keys(headers).map((key) => {
        return key + ': ' + headers[key]
    }).join('\r\n')
    return test;
}

function request(option, cb1, cb2) {
    let client = net.createConnection({
        port: option.port || 8080
    }, () => {
        console.log('服务器链接成功')
        client.write(option.method + ' / HTTP/1.1\r\n' + transforHeader(option.headers) + '\r\n\r\n' + '123');
    });
    client.on('data', function (data) {
        console.log(data)
        console.log(Object.prototype.toString.call(data))
        cb1(data.toString())
        client.end();
    });
    client.on('end', function () {
        console.log('断开与服务器的连接');
    });
    client.on('error', (err) => {
        cb2(err)
        console.log(err)
    })
}

request({port:8080, method: 'GET', headers: {'Host': 'localhost:8080',
'Accept': 'accept-encoding: gzip, deflate, br',
'content-length': '3'}}, function cb1(data) {
    console.log(data)
},function cb2(err) {
    console.log(err)
})