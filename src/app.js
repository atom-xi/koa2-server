const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const routerMiddleware = require("./routerMiddleware.js")

//实例化
let app = new Koa();
app.use(bodyParser())
app.use(routerMiddleware("./routers"))


//开启服务
const port = 3002
app.listen(port, () => {
  console.log(`koa2 is working on port ${port}...`)
})