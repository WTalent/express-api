//nodejs服务器
//引入express框架
const express=require("express");
//实例化express
const server=express();
//引入路由模块
const userRouter=require("./router/user");

//调用中间件
   //处理req.body属性
   server.use(express.json());
   server.use(express.urlencoded({extended:true}));
   //设置静态资源托管
   server.use(express.static('public'));

//处理路由
server.use('/api',userRouter);


//监听端口
server.listen(3000);