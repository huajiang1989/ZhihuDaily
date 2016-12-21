var http = require("http");
var server = http.createServer();
var url = require("url");
var querystring = require("querystring");
server.on('request', function (req, res) {
  var urlOption = url.parse(req.url);
  var query = querystring.parse(urlOption.query);
  var pathName ='http://news-at.zhihu.com'+ urlOption.pathname;
  console.log(pathName);
  var request = http.request(pathName);
  request.on('response', function (response) {
    responseEnd(response, res, query);
  });
  request.on('error', function (err) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.end({"error": err});
  });
  request.end();
});

var responseEnd = function (response, res, query) {
  var c = "";
  response.setEncoding('utf8');
  response.on('data', function (chunk) {
    c += chunk;
  });

  response.on('end', function () {

    res.writeHead(200, {'Content-type': 'application/json; charset=UTF-8'});
    console.log(c);
    if (query.callback)
      res.write(query.callback + '(' + c + ')');
    else
      res.write(c);
    res.end();
  })
};
server.listen(9000, function () {
  console.log("listen on 9000");
});
