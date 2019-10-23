const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const routerMiddleware = require("./routerMiddleware.js")
// const session = require('koa-session');

//实例化
let app = new Koa();
/* 
设置 session
app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess',  // 默认值，自定义cookie中的key
  maxAge: 86400000
};
app.use(session(CONFIG, app));  // 初始化koa-session中间件
*/
app.use(bodyParser())
app.use(routerMiddleware("./routers"))


// app.use(router.routes());   /*启动路由*/

//开启服务
const port = 3002
app.listen(port, () => {
  console.log("----------------------------------")
  console.log(`koa2 is working on port ${port}...`)
  console.log("----------------------------------")
})