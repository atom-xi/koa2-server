module.exports = {
  method: "GET",
  url: "/a",
  fun: async (ctx) => {
    ctx.response.body = {
      code: "0",
      message: "a is success"
    }
  }
}