module.exports = {
  method: "POST",
  url: "/user/login",
  fun: async (ctx) => {
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
  }
}