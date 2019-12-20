//链接数据库
//引入mongoosem模块
const mongoose=require("mongoose");
//引入一个数据库的url
const url="mongodb://127.0.0.1:27017/users";

//使用mongoose.connect()方法去链接数据库
mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("数据库连接成功");
}).catch(()=>{
    console.log("数据库连接失败");
});

//暴露接口供其他模块调用
module.exports=mongoose;