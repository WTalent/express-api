//用户检验中间件
//引入jwt模块
const jwt=require("jsonwebtoken");

//中间件
const auth=()=>{
    return (req,res,next)=>{
        //首先获取请求头中的令牌
        let userinfor=req.get('userinfor');
       //查看是否有令牌
       if(!userinfor)
       {
          res.send({
              code:0,
              meg:"用户未登录"
          });  
          return;
       }
       //查看令牌是否有效
       try{
           let isok=jwt.verify(userinfor,"auth");
           next();
       }catch{
          res.send({
              code:0,
              meg:"用户令牌失效"
          })
       }
       
   }
}


//暴露接口，供其他模块使用
module.exports=auth;
