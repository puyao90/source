// alert("我是外部js文件中的代码");
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer4);
    var current = parseInt(getComputedStyle(obj, null)[attr]); //一上来就判断元素目前的位置
    if (current > target) { //speed为正值的时候不管。加上speed的判断后调用时speed就不用考虑正负了
        speed = -speed;
    }
    obj.timer4 = setInterval(function() { //向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识。这样有效的避免了使用外部变量timer4
        var oldV = parseInt(getComputedStyle(obj, null)[attr]);
        // console.log(oldV);
        var newV = oldV + speed;
        if (speed > 0 && newV >= target || speed < 0 && newV <= target) {
            newV = target;
        }
        obj.style[attr] = newV + "px";
        if (newV == target) {
            clearInterval(obj.timer4);
            callback && callback(); //动画执行完毕，调用回调函数，只会调用一次
            //前面加一个判断，如果有就掉
        }
    }, 20)
}

function addClass(obj, cn) { //定义一个函数，用来向一个元素中添加指定的class属性值
    if (!hasClass(obj, cn)) { //检测obj中是否含有cn
        obj.className += " " + cn;
    }
}

function hasClass(obj, cn) {
    //var reg = /\bc3\b/; //加单词边界，表示得有c3且c3还要是独立的
    //这里想把c3改为变量cn，因此不能直接写，需要用构造函数写正则表达式
    var reg = new RegExp("\\b" + cn + "\\b"); //传变量c3进去后相当于reg=/c3/
    // alert(reg);
    return reg.test(obj.className);
}

function removeClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    obj.className = obj.className.replace(reg, "")
}

function toggleClass(obj, cn) { //可用来切换一个类，有就删除，没有就添加
    if (hasClass(obj, cn)) {
        removeClass(obj, cn)
    } else {
        addClass(obj, cn)
    }
}