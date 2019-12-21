# jwt 
 - 做项目中用户认证的工作
 - 之前，前后端不分离的项目，我们使用的是session来做的认证
 - 但是，前后端分离的项目，就不能使用session了。为什么呢？因为跨域了

 - jwt是目前最流行的跨域认证决解方案
 - jwt的全称叫做 JSON WEB TOKEN

### JWT认证流程

 1. 用户登录成功，后台给签发一个token，然后返回给前端
 2. 前端需要在发送请求的时候，如果这个请求是需要用户认证(判断有没有登录状态的)，就要在这个请求的请求头中加入一个自定义的请求头，
    Access_Token(假设是)，请求头的值是之前登录成功之后，后台返回的值
 3. 后台从请求头中获取到 Access_Token的值，这个值就是一个token，然后判断这个token是否有效，
     有效就让流程继续往下面继续进行，无效的话，就直接告诉前端一个401的状态码(401表示认证失败)
 PS:
 前端需要在登录完成后，将token给存起来，可以使用localStorage sessionStorage cookie
### 具体使用

- 需要安装模块jsonwebtoken
 1. 项目中安装 jsonwebtoken模块
   ```bash
     npm install --save jsonwebtoken
   ```
 2. 引入使用
   ```js
     const jwt=require("jsonwebtoken");
     let a=jwt.sign({
         userId:1,
         username:"大哥"
     },"我是私钥");
     //1.利用jwt.sing(payload,secret,options)方法签发一个token
     //paylod 需要隐藏在这个token中的信息
     //secret 签名私钥
     //options  其余一些配置，比如说token的有效期
      //返回值是token

     //2.利用方法jwt.verify(token,secret,options)校验某个token是否有效
     //token要校验的token
     //secret使用的签名私钥
     //options其余的配置项
     //返回值是token的payload对象,会添加一个隐藏对象iat:签发时间
     let data=jwt.verify(a,"我是私钥");

     //try{

    //  }catch{

    //  }
     
   ```
