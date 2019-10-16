var Koa = require('koa');
const bodyParser = require('koa-bodyparser')
var router = require('koa-router')();  /*引入是实例化路由** 推荐*/

//实例化
var app = new Koa();
app.use(bodyParser())

router.post('/user/register', async (ctx, next) => {
  let { name, password } = ctx.request.body
  if (name === 'cai' && password === '123') {
    ctx.set('Content-Type', 'application/json;charset=utf-8')
    ctx.response.body = {
      code: "0",
      message: "成功"
    }
  } else {
    ctx.response.body = '账号信息错误'
  }
})
//获取get传值
//http://localhost:3002/newscontent?aid=123

router.get('/newscontent', async (ctx) => {

  //从ctx中读取get传值
  let C = ctx;
  let url = ctx.url;
  //从request中获取GET请求
  let request = ctx.request;
  let req_query = request.query;
  let req_querystring = request.querystring;
  //从上下文中直接获取
  let ctx_query = ctx.query;
  let ctx_querystring = ctx.querystring;
  ctx.set('Content-Type', 'application/json;charset=utf-8')
  ctx.body = {
    C: C,
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  }

})

app.use(router.routes());
app.use(router.allowedMethods());


const port = 3002
app.listen(port, () => {
  console.log(`koa2 is working on port ${port}...`)
})