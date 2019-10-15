

var Koa = require('koa');

var router = require('koa-router')();  /*引入是实例化路由** 推荐*/

//实例化
var app = new Koa();

router.get('/', async (ctx) => {
  ctx.body = "首页";

})

router.get('/news', async (ctx) => {
  ctx.body = "新闻列表页面";

})

//获取get传值
//http://localhost:3002/newscontent?aid=123

router.get('/newscontent', async (ctx) => {

  //从ctx中读取get传值

  console.log(ctx.query);  //{ aid: '123' }       获取的是对象   用的最多的方式      ******推荐

  console.log(ctx.querystring);  //aid=123&name=zhangsan      获取的是一个字符串

  console.log(ctx.url);   //获取url地址

  //ctx里面的request里面获取get传值

  console.log(ctx.request.url);
  console.log(ctx.request.query);   //{ aid: '123', name: 'zhangsan' }  对象
  console.log(ctx.request.querystring);   //aid=123&name=zhangsan


  // ctx.body = { "aa": "11" };
  let url = ctx.url;
  //从request中获取GET请求
  let request = ctx.request;
  let req_query = request.query;
  let req_querystring = request.querystring;
  //从上下文中直接获取
  let ctx_query = ctx.query;
  let ctx_querystring = ctx.querystring;
  ctx.body = {
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

