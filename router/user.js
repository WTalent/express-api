//处理用户的路由
const express=require("express");
const router=express.Router();
//引入数据库表的模型对象
const user=require("../dataBaseStruct/user");
//移入密码加密模块
const bcryptjs=require("bcryptjs");
//引入jwt模块，做用户校验工作
const jwt=require("jsonwebtoken");

//处理用户注册
router.post('/sign-up',async(req,res)=>{
    //接收前端送来的数据
    let username=req.body.username;
    let password=req.body.password;
    let email=req.body.email;
     //检验邮箱是否已经被注册
     let isok=await user.findOne({email:email});
     if(isok||!username||!password||!email)
     {
      res.send({
          code:0,
          meg:"注册失败"
      });
      return;
     }
    //操作数据库进行修改
    //添加数据
    let data=new user({
      username:username,
      password:bcryptjs.hashSync(password),//要利用bcryptjs模块进行hash加密
      email:email
    })
    //保存到数据库中
    data.save();
    res.send({
       code:1, 
       meg:"注册成功"
    });   
});

//处理用户登录
router.post('/sign-in',async(req,res)=>{
     //接收前端数据
      let email=req.body.email;
      let password=req.body.password;
     //校验
    let data=await user.findOne({email:email});
    if(!data||!email||!password)
    {
     res.send({
         code:0,
         meg:"登录失败"
     });
     return;
    }
    //采用bcryptjs.compare()方法进行比较
    let isok=bcryptjs.compare(email,data.email);
    if(isok)
    {
      //进行jwt签名，给登录的用户一个令牌
      let  token=jwt.sign({
             userId:data._id,
             email:data.email,
             username:data.username
      },"auth");
      res.send({
          code:1,
          meg:"登录成功",
          token:token
      });  
    }
    else
    {
     res.send({
         code:0,
         meg:"登录失败"
     });
    }  
});
//暴露接口出去，给其他模块调用
module.exports=router;
