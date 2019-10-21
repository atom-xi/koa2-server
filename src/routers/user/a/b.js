module.exports = {
  method: "GET",
  url: "/user/a/b",
  fun: async (ctx) => {
    ctx.response.body = {
      code: "0",
      message: "b is success"
    }
  }
}