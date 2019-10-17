const fs = require("fs")
const path = require("path")
let filesArr = [] //用来存储文件信息


//获取接口文件
async function getFiles(f_path) {
  const files_path = path.resolve(__dirname, f_path)
  fs.readdir(files_path, (err, files) => {
    files.forEach(i => {
      let p = path.join(__dirname, f_path, i)
      var stat = fs.lstatSync(p);
      if (stat.isDirectory() === true) {
        let newPath = f_path + "/" + i
        getFiles(newPath)
      } else {
        let filesObj = {
          path: f_path,
          name: i
        }
        filesArr.push(filesObj)
      }
    })
    console.log("filesArr-->", filesArr)
  })
}
// getFiles("./routers")


//遍历接口文件
function addMiddleware(router, files_arr) {
  for (var f of files_arr) {
    let url = path.resolve(__dirname, './routers/' + f)
    let routeItem = require(url);
    createInterface(router, routeItem)
  }
}


//创建接口
function createInterface(router, routeItem) {
  switch (routeItem.method) {
    case "GET":
      router.get(routeItem.url, routeItem.fun);
      break;
    case "POST":
      router.post(routeItem.url, routeItem.fun);
      break;
    default: console.log(`${routeItem.method} is error`)
      break;
  }
}


module.exports = function (files_path) {
  const router = require('koa-router')();
  await getFiles(files_path)
  addMiddleware(router, files);
  return router.routes();
};



