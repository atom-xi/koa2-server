// const jwt = require('jsonwebtoken');
module.exports = {
  method: "POST",
  url: "/user/login",
  fun: async (ctx) => {
    // console.log("ctx-->", ctx)
    // let n = ctx.session.views || 0;   // 每次都可以取到当前用户的session
    // ctx.session.views = ++n;
    // const token = jwt.sign({
    //   _id: "1"
    // }, 'my_token', { expiresIn: '2h' });
    // ctx.cookies.set('username', 'lisa', {
    //   domain: 'localhost',
    //   path: '/index',   //cookie写入的路径
    //   maxAge: 1000 * 60 * 60 * 1,
    //   expires: new Date('2018-07-06'),
    //   httpOnly: false,
    //   overwrite: false
    // })
    // ctx.set('Content-Type', 'application/json; charset=utf-8')
    console.log("ctx-->", ctx)
    let { name, password } = ctx.request.body
    console.log("name-->", name)
    console.log("password-->", password)
    if (name === 'cai' && password === '123') {
      ctx.cookies.set('username', 'lisa', {
        domain: 'localhost',
        path: 'localhost:8097',   //cookie写入的路径
        maxAge: 1000 * 60 * 60 * 1,
        expires: new Date('2018-07-06'),
        httpOnly: false,
        overwrite: false
      })
      // ctx.set('token', token)
      ctx.response.body = {
        code: "0",
        message: "成功"
      }
    } else {
      ctx.response.body = '账号信息错误'
    }
  }
}