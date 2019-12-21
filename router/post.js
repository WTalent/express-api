//文章路由处理
const express=require("express");
const router=express.Router();
//引入用户校验模块
const zj=require("../middleware/zhong");
//引入表模型对象
const pmodel=require("../dataBaseStruct/post");


//处理文章列表
router.get('/posts',zj(),async(req,res)=>{
     //接收前端数据
     let pageNum=req.query.pageNum?req.query.pageNum:1;
     let pageSize=req.query.pageSize?req.query.pageSize:5;
     let count=await pmodel.find().countDocuments();
     let total=Math.ceil(count/parseInt(pageSize));
    //查询数据库,返回信息
    let data=await pmodel.find().skip((pageNum-1)*pageSize).limit(pageSize).sort({updatedAt:-1});
      res.send({
        code:1,
        meg:"这里是文章列表处理结果信息",
        data:data,
        total:total
      });
});


//暴露接口供其他模块调用
module.exports=router;