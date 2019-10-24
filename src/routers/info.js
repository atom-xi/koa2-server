module.exports = {
  method: "GET",
  url: "/info",
  fun: async (ctx) => {
    console.log("ctx-->", ctx)
    ctx.set('Content-Type', 'application/json;charset=utf-8')
    // ctx.cookies.set('username', 'lisa', {
    //   domain: 'localhost',
    //   path: '/index',   //cookie写入的路径
    //   maxAge: 1000 * 60 * 60 * 1,
    //   expires: new Date('2018-07-06'),
    //   httpOnly: false,
    //   overwrite: false
    // })
    ctx.set('token', "123456789")
    ctx.response.body = {
      code: "0",
      message: "info is success"
    }
  }
}