const fs = require("fs")
const path = require("path")

//查找所有接口文件
function getFilesArr(_path) {
  let filesArr = [] //用来存储接口文件信息(路径,文件名)

  //查找指定文件夹下的全部文件
  function findFiles(f_path) {
    const files_path = path.resolve(__dirname, f_path)
    let files = fs.readdirSync(files_path)
    if (files && files.length > 0) {
      files.forEach(item => {
        let p = path.join(__dirname, f_path, item)
        var stat = fs.lstatSync(p);
        let newPath = f_path + "/" + item
        if (stat.isDirectory() === true) {
          findFiles(newPath)
        } else {
          let filesObj = {
            filePath: newPath,
            fileName: item
          }
          filesArr.push(filesObj)
        }
      })
    }
  }
  findFiles(_path)
  return filesArr
}

//遍历读取接口文件
function addMiddleware(router, files_arr) {
  for (let f of files_arr) {
    let routeItem = require(f.filePath);
    routeItem.fileName = f.fileName
    routeItem.filePath = f.filePath
    createInterface(router, routeItem)
  }
}

//创建接口
function createInterface(router, routeItem) {
  if (!routeItem.method || !routeItem.url || !routeItem.fun) {
    console.log("123")
    console.log("**********************************")
    console.log(`${routeItem.fileName} file is error`)
    console.log(`${routeItem.fileName} in ${routeItem.filePath} `)
    console.log("**********************************")
    return false
  }
  switch (routeItem.method) {
    case "GET":
      router.get(routeItem.url, routeItem.fun);
      break;
    case "POST":
      router.post(routeItem.url, routeItem.fun);
      break;
    default:
      break;
  }
}

module.exports = function (files_path) {
  const router = require('koa-router')();
  let files = getFilesArr(files_path)
  // console.log("files", files)
  addMiddleware(router, files);
  return router.routes();
};