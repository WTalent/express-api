//数据库表的模型对象

//引入数据库连接模块
const mongoose=require("../config/db");

//设置数据库表的数据结构
const schema=new mongoose.Schema({
      username:String,
      password:String,
      email:String,
      adavat:{
          type:String,
          default:"http://localhost:3000/logo.png" //默认的头像
      }
})
//创建表
const model=mongoose.model('user',schema);

//暴露接口出去供其他模块调用
module.exports=model;