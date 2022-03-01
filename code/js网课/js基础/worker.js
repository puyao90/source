function fibonacci(n) {
    return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}

var onmessage = function(event) { //固定的
    console.log(this) //分线程里的this是DedicatedWorkerGlobalScope这个对象
    var number = event.data
    console.log('分线程接收到主线程发送的数据' + number)
    var result = fibonacci(number) //计算
    postMessage(result)
    console.log('分线程向主线程返回数据' + result) //console是浏览器提供实现的
        //alert(result) //报错，因为alert是window的方法
        //分线程中的全局对象不再是window（更加没有Document属性对象），所以在分线程中不能更新界面
}