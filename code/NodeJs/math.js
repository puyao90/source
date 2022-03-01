// exports.add = function(a, b) { return a + b }

// exports.mul = function(a, b) { return a * b }

module.exports = { name: "芭蕉", age: 2, sayName: function() { console.log("芭蕉扇") } }
    //exports和module.exports指向的是同一个对象，那如果给一个对象添加a属性exports.a=xxx 在module.exports里也有a
    //但如果给exports赋值一个新的对象 exports=new Object()  exports里的a就没了
    //module.exports=是在改对象 exports=是在修改变量（本来exports指向module.exports）

//exports和module.exports
//通过exports只有使用.的方式向外暴露内部的变量
//而module.exports既可以通过.的形式，也可以直接赋值