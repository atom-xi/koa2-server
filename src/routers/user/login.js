const jwt = require('jsonwebtoken');
module.exports = {
  method: "POST",
  url: "/user/login",
  fun: async (ctx) => {
    console.log("ctx-->", ctx.request.header.cookie)
    // let n = ctx.session.views || 0;   // 每次都可以取到当前用户的session
    // ctx.session.views = ++n;
    const token = jwt.sign({
      _id: "1"
    }, 'my_token', { expiresIn: '2h' });
    ctx.request.header.cookie = token
    let { name, password } = ctx.request.body
    if (name === 'cai' && password === '123') {
      ctx.set('Content-Type', 'application/json;charset=utf-8')
      ctx.set('Cookie', token)
      ctx.set('token', token)
      ctx.response.body = {
        code: "0",
        message: "成功"
      }
    } else {
      ctx.response.body = '账号信息错误'
    }
  }
}