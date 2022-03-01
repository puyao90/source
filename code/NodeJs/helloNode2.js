//fs模块的其他方法
var fs = require('fs')

//验证路径是否存在 fs.existsSync(path)
var isExists = fs.existsSync('hello.txt')
console.log(isExists)


//获取文件状态 fs.stat(path,callback)  fs.statSync(path)
fs.stat('hello2.txt', function(err, stat) {
        console.log(stat);
        console.log(stat.isFile())
    })
    //它会给我们返回一个对象，这个对象里保存了当前对象状态的相关信息。其中stats是fs.Stats对象，可用stats对象的方法
    //isFile() 是否是一个文件    isDirectory() 是否是一个文件夹


//删除文件 fs.unlink(path, callback)   fs.unlinkSync(path)
// fs.unlinkSync('hello.txt')


//读取一个目录的目录结构  fs.readdir(path[, options], callback)  fs.readdirSync(path[, options])
fs.readdir(".", function(err, files) {
        if (!err) { console.log(files) }
    })
    //files是一个字符串数组，每一个元素就是一个文件夹或文件的数组


//截断文件  fs.truncate(path[, len], callback)   fs.truncateSync(path[, len])
//将文件修改为指定的大小
// fs.truncateSync("hello2.txt", 9)


//建立目录  fs.mkdirSync(path[, options])  fs.mkdir(path[, options], callback)
// fs.mkdirSync("hello")


//删除目录   fs.rmdirSync(path[, options])    fs.rmdir(path[, options], callback)
// fs.rmdirSync("hello")


//重命名文件夹  fs.renameSync(oldPath, newPath)   fs.rename(oldPath, newPath, callback)
// fs.rename('hello3.txt', '/Users/sphy/Desktop/hello3.txt', function(err) {  //相当于剪贴
//     if (!err) { console.log("修改成功") }
// })


//监视文件的修改  fs.watchFile(filename[, options], listener)
//listener回调函数 当文件发生变化时，回调函数执行
// fs.watchFile("hello2.txt", function(curr, prev) { //curr当前文件的状态  prev修改前文件的状态 这两个对象都是stats对象
//     console.log("修改前文件大小" + prev.size);
//     console.log("修改后文件大小" + curr.size);
// })