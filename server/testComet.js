var http = require('http');

var data = {key: 'value1', hello: 'world'};

var server = http.createServer(function (req, res) {
  // res.writeHead(200, {'Content-Type': 'application/json'});
  if(req.url === '/msg') {
         // 1. 设定头信息
         res.writeHead(200, {
             "Content-Type": "text/event-stream",
             "Cache-Control": "no-cache",
             "Connection": "keep-alive",
             "Access-Control-Allow-Origin":"*"
         });

       // 2. 输出内容，必须 "data:" 开头 "\n\n" 结尾（代表结束）
       setInterval(function () {
           res.write("data: " + Date.now() + "\n\n");
       }, 1000);
   }
  //   else {
  //      // 其他请求显示index.html
  //      fs.readFile('../testComet/index.html', function (err, content) {
  //          res.writeHead(200, {'Content-Type': 'text/html'});
  //          res.end(content, 'utf-8');
  //      });
  //  }
  // let i = 10;
  // while(i > 0){
  //   i--;
  //   res.end(JSON.stringify(data));
  // }
  // 获取请求路径
  // var pathname = url.parse(req.url).pathname;
  // var query = url.parse(req.url, true).query;

  // 关闭nodejs 默认访问 favicon.ico
  // if (!pathname.indexOf('/favicon.ico')) {
  //   return;
  // };

  // 路由器处理
  // route(handle, pathname, query, res);


});

server.listen(3000, function() {
  console.log('listening on localhost:3000');
});
