module.exports = {
  method: "GET",
  url: "/user/a/a",
  fun: async (ctx) => {
    ctx.response.body = {
      code: "0",
      message: "a is success"
    }
  }
}