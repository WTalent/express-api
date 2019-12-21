//引入数据库连接
const mongoose=require("../config/db");

//设置表的数据结构
const schema=new mongoose.Schema({
    title:String,
    content:String
},{
    timestamps:true   
  });

//创建表
const model=mongoose.model('post',schema);

//暴露接口出去
module.exports=model;