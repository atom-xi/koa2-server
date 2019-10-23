const session = require('koa-session');
const Koa = require('koa');
const app = new Koa();

app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess',  // 默认值，自定义cookie中的key
  maxAge: 86400000
};

app.use(session(CONFIG, app));  // 初始化koa-session中间件


module.exports = { app }