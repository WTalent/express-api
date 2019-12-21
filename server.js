//nodejs服务器
//引入express框架
const express=require("express");
//实例化express
const server=express();
//引入路由模块
const userRouter=require("./router/user");
const postRouter=require("./router/post");

//调用中间件
   //处理req.body属性
   server.use(express.json());
   server.use(express.urlencoded({extended:true}));
   //设置静态资源托管
   server.use(express.static('public'));
//处理跨域问题
server.use(function(req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization,userinfor');
   next();
 });

//处理路由
server.use('/api',[userRouter,postRouter]);


//监听端口
server.listen(3000);