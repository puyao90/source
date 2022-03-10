//1引入express
const express = require("express");

//2创建应用对象
const app = express();

//3创建路由规则
app.get("/server", (request, response) => {
  //request是对请求报文的封装，response是对响应报文的封装
  //当客户端浏览器向服务器发送请求时，如果请求行的第二段内容，URL路径是/server的话，就会执行后面回调函数的代码，由response做出响应
  response.setHeader("Access-Control-Allow-Origin", "*"); //设置响应头，设置允许跨域
  //设置3s后再返回结果
  setTimeout(() => {
    response.send("延时响应");
  }, 3000);
  //response.send('HELLO AJAX')//设置响应体
});

app.all("/server", (request, response) => {
  //post改为all 可以接收任意类型的请求  自定义响应头后会给服务器发一个OPTIONS类型的请求以校验头信息
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*"); //设置允许自定义响应头
  response.send("HELLO AJAX POST");
});

app.all("/json-server", (request, response) => {
  //post改为all 可以接收任意类型的请求  自定义响应头后会给服务器发一个OPTIONS类型的请求以校验头信息
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");

  const data = {name: "atguigu~~"};
  //send方法里只能接收字符串和Buffer。这里要对对象进行字符串的转化
  let str = JSON.stringify(data);
  response.send(str);
});

// //jQuery服务
// app.all("/jQuery", (request, response) => {
//   response.setHeader("Access-Control-Allow-Origin", "*");
//   response.setHeader("Access-Control-Allow-Headers", "*");
//   //response.send('HELLO jQuery AJAX')//设置响应体
//   const data = {name: "尚硅谷"};
//   response.send(JSON.stringify(data));
// });

// //axios服务
// app.all("/axios", (request, response) => {
//   response.setHeader("Access-Control-Allow-Origin", "*");
//   response.setHeader("Access-Control-Allow-Headers", "*");
//   const data = {name: "hello axios"};
//   response.send(JSON.stringify(data));
// });

// //fetch服务
// app.all("/fetch", (request, response) => {
//   response.setHeader("Access-Control-Allow-Origin", "*");
//   response.setHeader("Access-Control-Allow-Headers", "*");
//   const data = {name: "hello fetch"};
//   response.send(JSON.stringify(data));
// });

//4监听端口启动服务
app.listen(8000, () => {
  console.log("服务器已经启动，8000端口监听中");
});
