# 接口文档

-  注册接口
1. 请求URL: http://localhost:3000/api/sign-up
2. 请求方式：POST
3. |参数名|类型|是否必选|说明|
   |---|---|---|---|
   |username|string|Y|用户名|
   |password|string|Y|用户密码|
   |email|string|Y|用户邮箱|
4. 返回实例
   ```js
     {
      code:1, //1代表注册成功，0代表注册失败
      meg:"返回失败或者成功信息"
     }
   ```

- 登录接口
1. 请求URL: http://localhost:3000/api/sign-in
2. 请求方式: POST
3. |参数名|类型|是否必选|说明|
   |---|---|---|---|
   |email|string|Y|用户邮箱|
   |password|string|Y|用户密码|
4. 返回实例
   ```js
    {
     code:1, //1代表登录成功，0代表登录失败
     meg:"返回失败或者成功信息"
    }
   ```

- 文章列表
1. 请求URL: http://localhost:3000/api/posts
2. 请求方式: GET
3. |参数名|类型|是否必选|默认值|说明|
   |---|---|---|---|---|
   |pageNum|number|N|1|当前页数|
   |pageSize|number|N|5|一页多少条数据|
4. 返回实例
   ```js
    {
     code:1, //1代表成功，0代表失败
     meg:"返回成功或失败信息",
     data:{[...]} ,//返回获取的数据信息
     total: //返回总页数
    }
   ```
