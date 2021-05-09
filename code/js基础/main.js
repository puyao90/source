let age = 30;
// const age = 30;  //short for constant(常数，恒量) 不能改变
age = 31;
console.log(age);
const x = null;
console.log(typeof x);
const name = "John";
const age1 = 30;
console.log(`My name is ${name} and I am ${age1}`); //template string模版字符串
const s = "technology,computer,it,code";
console.log(s.split(","))
const fruits = ["apples", "oranges", "pears"];
fruits[1] = "1";
fruits.push("mangos");
fruits.unshift("strawberries");
fruits.pop();
console.log(fruits);
console.log(fruits.indexOf("apples"));

var b = (123).toString();
console.log(typeof b);
var obj = { name: "oyz", gender: "female", age: "25", dob: "95" };
for (var n in obj) { console.log(n + ":" + obj[n]) };

var num1, num2, num3;
num1 = 89;
num2 = 99;
num3 = 100;
var min;
if (num1 < num2) {
    if (num1 < num3) {
        min = num1;
        if (num2 < num3) { console.log(min, num2, num3); } else { console.log(min, num3, num2); }
    } else {
        min = num3;
        console.log(min, num1, num2);
    }
} else {
    if (num2 < num3) {
        min = num2;
        if (num1 < num3) { console.log(min, num1, num3); } else { console.log(min, num3, num1) }
    } else {
        min = num3;
        console.log(min, num2, num1);
    }
};

var score = 61;
switch (parseInt(score / 10)) {
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
        console.log("hege");
        break;
    default:
        console.log("buhege");
        break;
}
console.log("wos\"hi")

var score = 59;
switch (score > 60) {
    case true:
        console.log("hege");
        break;
    default:
        console.log("buhege");
        break;
}

var year = 1;
while (1000 * 1.05 ** year < 5000) { year++ }
console.log(year);

var count = 0;
var sum = 1000;
while (true) {
    sum *= 1.05;
    count++;
    if (sum >= 5000) { break; }
}
console.log(count);

var sum = 1000;
var count = 0;
while (sum < 5000) {
    sum *= 1.05;
    count++;
}
console.log(count);

var sum1 = 0;
for (var n = 0; 2 * n + 1 <= 100; n++) { sum1 += (2 * n + 1) }
console.log(sum1);

var count = 0,
    sum = 0;
for (n = 1; n <= 100; n++) {

    if (n % 7 == 0) {
        count++;
        sum = sum + n
    }
}
console.log(count);
console.log(sum);

console.log(5 % 10);

// for (var n = 100; n <= 1000; n++) {
//     if (n == 100 * parseInt(n / 100) + 10 * parseInt(n / 10 % 10) + parseInt(n % 10)) {
//         console.log(n)
//     }
// }
for (var n = 100; n < 1000; n++) {
    if (n == parseInt(n / 100) ** 3 + parseInt(n / 10 % 10) ** 3 + parseInt(n % 10) ** 3) {
        console.log(n)
    }
}

// n = 10;
// if (n > 1 && isInterger(n)) {
//     if (
//         for (var i = 2; i < n; i++) { n % i != 0 })
//     { console.log("n是质数") }
// }

n = -1;
if (n > 1 && (n % 1 === 0)) {
    is_prime = true;
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            is_prime = false
            break;
        }
    }
    console.log("n是质数  = ", is_prime)
} else {
    console.log("n是质数  = ", "没法判断")
}

for (n = 0; n < 5; n++) {
    for (i = 0; i < 5 - n; i++) {
        document.write("*&nbsp;")
    }
    document.write("</br>")
}

for (n = 1; n < 10; n++) {
    for (i = 1; i <= n; i++) {
        // document.write(n)
        document.write(n + "*" + i + "=" + n * i + "&nbsp;&nbsp;&nbsp;")
    }
    document.write("</br>")
}

console.time("test");
for (n = 2; n < 100; n++) {
    var flag = true;
    for (i = 2; i <= Math.sqrt(n); i++) {
        // var flag = true
        if (n % i == 0) {
            flag = false;
            break;
        }
        // if (!flag) { break; }
    }
    if (flag) { console.log(n); }
}
console.timeEnd("test");

function even(n) { if (n % 2 == 0) { return true; } else { return false; } }
console.log(even(2));
//可简写为如下
function even1(n) { return n % 2 == 0 }
console.log(even(3));

function area(r) { return 3.14 * r ** 2 }
console.log(area(5));

function Person(name, age) { this.name = name, this.age = age }
var per1 = new Person("A", 18);
var per2 = new Person("B", 28);
var per3 = new Person("C", 8);
var per4 = new Person("D", 16);
var per5 = new Person("E", 38);
var perArr = [per1, per2, per3, per4, per5];

function adult() {
    var perArr_adult = [];
    for (var i = 0; i < perArr.length; i++) {
        if (perArr[i].age >= 18) { perArr_adult[perArr_adult.length] = perArr[i] }
    }
    return console.log(perArr_adult);
}
adult();

console.time("test1");
cnt = 0
while (cnt < 10) {
    var arr_test = [1, 2, 3, 2, 5, 5, 5, 1, 3, 4, 2, 5, 5]
    for (var i = arr_test.length - 1; i >= 0; i--) {
        var flag = false;
        for (var j = 0; j < i; j++) {
            if (arr_test[j] == arr_test[i]) {
                arr_test.splice([i], 1);
                flag = true;
                break;
            }
        }
        if (flag) { i++ }
    }
    cnt++
}
console.log(arr_test);
console.timeEnd("test1");

var arr_test = [1, 2, 3, 2, 5, 1, 3, 3, 3, 4, 2, 5]
for (var i = 0; i < arr_test.length; i++) {
    for (var j = arr_test.length - 1; j > i; j--) {
        if (arr_test[j] == arr_test[i]) {
            arr_test.splice([j], 1);
        }
    }
}
console.log(arr_test);


var arr_test1 = [3, 8, 4, 11, 3, 21, 8, 0]
arr_test1.sort(function(a, b) {
    //console.log(a, b) 
    return b - a;
})
console.log(arr_test1);

console.log(Math.ceil(-5.9));
console.log(Math.floor(-5.9));