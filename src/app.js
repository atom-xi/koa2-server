// // 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
// const Koa = require('koa');

// // 创建一个Koa对象表示web app本身:
// const app = new Koa();

// // 对于任何请求，app将调用该异步函数处理请求：
// app.use(async (ctx, next) => {
//   await next();
//   ctx.response.type = 'text/html';
//   ctx.response.body = '<h1>Hello, koa2!</h1>';
// });

// // 在端口3000监听:
// app.listen(3000);
// console.log('app started at port 3000...');
// const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
// const bodyParser = require('koa-bodyparser');

// const app = new Koa();
// app.use(bodyParser());

// router.post('/signin', async (ctx, next) => {
//   var name = ctx.request.body.name || '', password = ctx.request.body.password || '';
//   console.log(`signin with name: ${name}, password: ${password}`);
//   if (name === 'koa' && password === '12345') {
//     ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
//   } else {
//     ctx.response.body = `<h1>Login failed!</h1>
//       <p><a href="/">Try again</a></p>`;
//   }
// });

// // log request URL:
// app.use(async (ctx, next) => {
//   console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
//   await next();
// });
// router.get('/', async (ctx, next) => {
//   ctx.response.body = '<h1>Index</h1>';
// });
// // add url-route:
// router.get('/hello/:name', async (ctx, next) => {
//   var name = ctx.params.name;
//   ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// });


// // add router middleware:
// app.use(router.routes());

// app.listen(3000);
// console.log('app started at port 3000...');
// https://juejin.im/post/5d3c51ad6fb9a07ead5a42bf#heading-5
const Koa = require("koa");
const app = new Koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

app.use(async ctx => ctx.body = '服务启动成功');
app.use(router.routes());
app.use(router.allowedMethods());
router.use('/articles', articleRouter.routes(), articleRouter.allowedMethods())
const appService = app.listen(3000, () => {
  console.log('[Koa]Server is starting at localhost:3000');
});

// 导出服务(是为了供单测使用)
// 即使这里不导出也正常可以跑项目，后面会讲解这里为什么需要导出
module.exports = appService;
