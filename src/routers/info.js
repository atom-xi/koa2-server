module.exports = {
  method: "GET",
  url: "/info",
  fun: async (ctx) => {
    ctx.response.body = {
      code: "0",
      message: "info is success"
    }
  }
}