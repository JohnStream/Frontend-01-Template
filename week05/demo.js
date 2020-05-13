const request = require("request")
var query = {'logo': 'Geetest'}
request({
   url: 'http://localhost:8080/',
   method: 'GET',
   json: true,
   form:  JSON.stringify(query)
}, function (err, response, body) {
    console.log(err, body);
});