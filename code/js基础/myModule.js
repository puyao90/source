// function myModule() {
//     var msg = "My Data" //私有数据

//     function doSomething() { //操作数据的函数
//         console.log("doSomething()" + msg.toUpperCase())
//     }

//     function doOtherthing() {
//         console.log("doOtherthing()" + msg.toLowerCase())
//     }
//     //return doSomething //只暴露一个数据
//     return { //向外暴露对象
//         doSomething: doSomething,
//         doOtherthing: doOtherthing
//     }
// }

//第二种写法
(function() {
    var msg = "My Data"

    function doSomething() {
        console.log("doSomething()" + msg.toUpperCase())
    }

    function doOtherthing() {
        console.log("doOtherthing()" + msg.toLowerCase())
    }
    window.myModule2 = { //匿名函数自调用，把要暴露的东西添加为window的属性
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }
})()