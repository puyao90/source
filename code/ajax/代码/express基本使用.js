//1引入express
const express = require("express");

//2创建应用对象
const app = express();

//3创建路由规则
app.get("/", (request, response) => {
  //request是对请求报文的封装，response是对响应报文的封装
  response.send("Hello Express"); //设置响应
});
//4监听端口启动服务
app.listen(8000, () => {
  console.log("服务器已经启动，8000端口监听中");
});
