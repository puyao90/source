console.log("哈哈2221")
var fs = require('fs') //使用require方法加载js核心模块
fs.readFile('./hello.txt', function(error, data) { console.log(data.toString()) }) //成功:data-数据 error-null 失败：data-null error-错误对象
    //在node中，一个js文件就是一个模块
    //在node中，通过require()函数来引入外部的模块。可以传入一个文件的路径作为参数，如果使用相对路径，必须以.或..开头
    //使用require()引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块
    //在node中，每一个js文件中的js代码都是独立运行在一个函数中的，而不是全局作用域。所以一个模块中的变量和函数在其他模块中无法访问
    //可以通过exports来向外部暴露变量和方法。只需要将需要暴露给外部的变量或方法设置为exports的属性即可
var math = require('./math.js')
    // console.log(math.add(2, 3))
    // console.log(math.mul(2, 3))

//我们使用require()引入外部模块时，使用的就是模块标识，我们可以通过模块标识来找到指定的模块
//模块分为两大类
//核心模块 --由node引擎提供的模块   核心模块的标识就是模块的名字  
//文件模块 --由用户自己创建的模块   文件模块的标识就是文件的路径（绝对/相对路径）
var fs = require('fs')

//在node中有一个全局对象global，它的作用和网页中的window类似
//在全局中创建的变量都会作为global的属性保存，在全局中创建的方法都会作为global的方法保存
//var a = 10 //a此时是局部变量
a = 10 //去掉var a就成了全局变量
console.log(global.a)

console.log(arguments) //能输出结果 说明确实是在一个函数里
console.log(arguments.callee) //arguments.callee这个属性保存的是当前执行的函数对象
console.log(arguments.callee + "") //拼串调用toString 把函数的结果打印出来了

//当node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码
// function (exports, require, module, __filename, __dirname) {
//在代码最下部添加 }
//实际上模块的代码都是包装在一个函数中执行的，并且在函数执行时同时传递进了5个实参
//exports 该对象用来将变量或函数暴露到外部
//require 函数，用来引入外部的模块
//module 代表的是当前模块本身，exports是module的属性
//__filename  当前模块的完整路径
//__dirname  当前模块所在文件夹的完整路径
console.log(exports === module.exports) //true
console.log(math.name)
console.log(math.age)
math.sayName()

//包实际上就是一个压缩文件，解压后还原为目录。符合规范的目录应该包含：
//package.json-描述文件（）必须  bin-可执行二进制文件 lib-依赖的js文件  doc  test
//包是把一组相关模块组合到一起，变成一个完整的功能

//NPM(Node Package Manager)
//对于Node而言，NPM帮助其完成了第三方模块的发布，安装和依赖等。
//通过npm下载的包都放在node_modules文件夹中
//node在使用模块名字来引入模块时，会首先在当前目录的node_modules中寻找是否含有该模块。
//如果有则直接使用，如果没有则去上一级目录的node_modules中寻找是否含有该模块，
//如果有则直接使用，如果没有则再去上一级目录寻找，直到找到磁盘的根目录，如果依然没有则报错。


//Buffer(缓冲区)
//buffer是存储二进制数据的。Nodejs作为服务器要接受用户发的请求，再返回响应。请求全都是二进制数据。用户发的请求存在缓冲区，在读之前有个地方保存。同样把一个数据发送给用户也是先存到buffer里。
//Buffer的结构和数组很像，操作的方法也和数组类似
//数组中不能存储二进制的文件，而Buffer就是专门用来存储二进制数据的
//使用Buffer不需要引入模块，直接使用即可
//在Buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
//Buffer中每一个元素的范围是从 00-ff   0-255   00000000-11111111  即一个元素占一个字节
var str = "Hello Auguigu"
var buf = Buffer.from(str) //将一个字符串保存到Buffer中
console.log(buf) // <Buffer 48 65 6c 6c 6f 20 41 75 67 75 69 67 75>
console.log(buf.length) //13 占用内存的大小
console.log(str.length) //13 字符串的长度
str = "Hello 尚硅谷"
buf = Buffer.from(str)
console.log(buf.length) //15 一个汉字占用三个字节
console.log(str.length) //9

//创建一个10个字节的Buffer
//var buf2 = new Buffer(10) //Buffer的所以构造函数都是不推荐使用的
var buf2 = Buffer.alloc(10) //alloc分配 在内存里分配出10个字节的空间 这10个元素是在连续的内存里的
console.log(buf2)
buf2[0] = 0xaa //通过索引，来操作buf2中的元素
buf2[1] = 255
buf2[10] = 15 //没有用
    //Buffer的大小一旦确定则不能修改，Buffer实际上是对底层内存的直接操作
buf2[3] = 556 //显示2c 十进制的556转2进制1000101100 2C转2进制101100 可看出它只取了后八位，把前边的舍去了
console.log(buf2)
console.log(buf2[0]) //170
    //只要数字在控制台或页面中输出一定是10进制
console.log(buf2[0].toString(16)) //aa   number类型的字符串里面是可以传参数的，传16就是转化为16进制
for (var i = 0; i < buf2.length; i++) { console.log(buf2[i]) }

//Buffer.allocUnsafe(size)创建一个指定大小的Buffer，但是Buffer中可能含有敏感数据
var buf3 = Buffer.allocUnsafe(10) //只分配空间而不清空数据，而alloc还会清空数据
console.log(buf3)
var buf4 = Buffer.from('我是一段文本数据')
console.log(buf4.toString()) //调toString直接把缓冲区里的数据转化为字符串


//文件系统 File System   fs
//文件系统简单来说就是通过Node来操作系统中的文件。
//在Node中与文件系统的交互是非常重要的，服务器的本质就是将本地文件发送给远程的客户端。
//Node通过fs模块来和文件系统进行交互，该模块提供了一些标准文件访问API来打开，读取，写入文件以及与其交互。
//使用文件系统需要先引入fs模块，fs是核心模块，直接引入不需要下载
var fs = require('fs')

//fs模块中所有的操作都有两种形式可供选择，同步和异步。
//同步文件系统会阻塞程序的执行，也就是除非操作完毕，否则不会向下执行代码
//异步文件系统不会阻塞程序的执行，而是在操作完成时，通过回调函数将结果返回

//文件的写入
//手动操作步骤：打开文件--向文件中写入内容--保存并关闭文件
//1打开  fs.openSync(path[, flags, mode])
//path 要打开文件的路径   flags 打开文件要做的操作类型（r只读的  w可写的）   mode设置文件的操作权限，一般不传  
var fd = fs.openSync("hello.txt", "w")
console.log(fd) //23 
    //该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各自操作

//2写入 fs.writeSync(fd, string[, position[, encoding]])
//fd 文件的描述符，需要传递要写入的文件的描述符   string 要写入的内容    position 写入的起始位置    encoding 写入的编码，默认utf-8
fs.writeSync(fd, "芭蕉不是香蕉", 3)

//3关闭  fs.closeSync(fd)（在测试里面可以不关，因此程序运行完了内存就释放了。但是在服务器上程序不会停，必须关）
fs.closeSync(fd)

//异步文件写入
//1打开 fs.open(path[, flags[, mode]], callback)
// var f
fs.open("hello.txt2", "w", function(err, fd) {
        console.log('回调函数中的代码') //回调函数是等文件操作完了才会执行
            //console.log(arguments) //[Arguments] { '0': null, '1': 23 }
        if (!err) { //判断是否存在错误
            console.log(fd);
            // f = fd;
            fs.write(fd, "这是异步写入的内容", function(err) { //写入的回调函数里不需要fd了，回调会接收到参数 (err, written, string)
                if (!err) { console.log("写入成功") }
                fs.close(fd, function(err) {
                    if (!err) { console.log("文件已关闭") }
                })
            })
        } else { console.log(err) }
    })
    //异步的没有返回值，只要有返回值一定是同步的，意味着等他有返回结果才执行console.log(fd) 
    //异步调用的方法，结果都是通过回调函数的参数返回的
    //回调函数两个参数：err错误对象，如果没有错误则为null  fd文件的描述符

//2写入  fs.write(fd, string[, position[, encoding]], callback)
//console.log("open下的代码" + f) //open下的代码undefined     回调函数中的代码
//异步IO，把open的操作交给后台的IO线程池了，由线程池去做打开文件的操作，操作完了再通过回调函数返回。当回调函数执行的时候代表文件已经读完了
//这里f拿不到，因此要写到open里

//3关闭  fs.close(fd, callback)
console.log('程序向下执行')


//简单文件写入 fs.writeFile(file, data[, options], callback)   fs.writeFileSync(file, data[, options])
//file 要操作的文件的路径  data 要写入的数据  options是一个对象，里面有encoding，mode,flag(默认w)  callback当写入完成后执行的函数
fs.writeFile('hello3.txt', "这是通过writeFile写入的内容", { flag: 'a' }, function(err) { if (!err) { console.log("写入成功") } })

//文件系统标志
//r打开文件用于读取。 如果文件不存在，则会发生异常。
//r+打开文件用于读取和写入。 如果文件不存在，则会发生异常。
//w打开文件用于写操作，如果不存在则创建，如果存在则截断（截断意味把文件内容干掉从头写）
//a打开文件用于追加。 如果文件不存在，则创建该文件。

//fs.writeFile('/Users/sphy/Desktop/source/code/waibu.txt', "测试外部文件写入", function(err) { if (!err) { console.log("写入成功!!!") } else { console.log(err) } })
//也可以写在外部，写上路径（前有/是绝对路径）


//流式文件写入
//同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
//1创建一个可写流 fs.createWriteStream(path[, options])
var ws = fs.createWriteStream('hello3.txt')

//可以通过监听流的open和close事件来监听流的打开和关闭
//on（事件字符串，回调函数）--可以为对象绑定一个事件
//once（事件字符串，回调函数）--可以为对象绑定一个一次性的事件，该事件将会在触发一次后失效
ws.once('open', function() { console.log('流打开了') }) //当open事件发生的时候函数触发
ws.once('close', function() { console.log("流关闭了") })

//2通过ws向文件中输出内容
ws.write('通过可写流写入文件的内容')
ws.write('第二句***') //可以分多次把一个内容写到文件里
ws.write('第三句啦啦啦啦')

//3关闭流  这样写了才关闭流
//ws.close() //这里不能用close()，这样相当于还在传输就断了被传输端的水管 实际效果一样
ws.end()


//文件的读取
//同步文件读取 异步文件读取 同上原理 先open再read再close
//简单文件读取 fs.readFile(path[, options], callback)  fs.readFileSync(path[, options])
//path 要读取的文件的路径  options是一个对象，里面有encoding，flag(默认r)  callback通过回调函数将读取到的内容返回
fs.readFile('/Users/sphy/Desktop/robote2.png', function(err, data) {
    if (!err) {
        console.log(data); //读取到的数据，会返回一个Buffer
        // console.log(data.toString())
        //fs.writeFile('/Users/sphy/Desktop/hello.jpg', data, function(err) { if (!err) { console.log('文件写入成功') } }) //将data写入到文件中
    }
})

//流式文件的读取 可以分多次将文件读取到内存中
//创建一个可读流 fs.createReadStream(path[, options])
var rs = fs.createReadStream('/Users/sphy/English/Password\ Readers/Password_Readers_5_www.frenglish.ru_Sense_and_Sensibility/01.mp3')
rs.once('open', function() { console.log('可读流打开了=') })
rs.once('close', function() {
    console.log("可读流关闭了=");
    //ws1.end() //数据读写完毕则关闭可写流
})

var ws1 = fs.createWriteStream('/Users/sphy/Desktop/a.mp3')
ws1.once('open', function() { console.log('可写流打开了=') })
ws1.once('close', function() { console.log("可写流关闭了=") })

//如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
// rs.on('data', function(data) {
//         // console.log(data);
//         // ws1.write(data)
//     }) //读完会自动关闭可读流 读到的内容通过data返回

//pipe()可以将可读流中的内容，直接输出到可写流中
//rs.pipe(ws1)