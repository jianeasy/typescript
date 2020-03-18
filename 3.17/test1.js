var message = "hello world";
console.log(message);
//面向对象
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.name = function () {
        console.log("xiaoming");
    };
    return Person;
}());
var p1 = new Person();
p1.name();
//数据类型
//数组
var arr1 = [1, 2];
//数组泛型
var arr2 = [1, 2];
//元组
var x;
x = ["name", "小明"];
console.log(x[0]);
//void类型，用于标识返回值的类型，表示该方法没有返回值
function hello() {
    console.log("hello world");
}
//Any类型，任意类型
//变量的值会动态改变时，比如来自用户的输入，任意值类型可以让这些变量跳过编译阶段的类型检查
var a = 1;
a = 'apple';
a = false;
var arrList = [1, "hello", false];
arrList[1] = 100;
//联合类型
var b; //一个变量可以出现多个类型
b = 1;
b = null;
b = undefined;
b = "aaaa";
//never类型
//never 是其它类型（包括 null 和 undefined）的子类型，
//代表从不会出现的值。这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环）
var c;
var d;
//c = 123;//报错，数字类型不能转为 never 类型
// 返回值为 never 的函数可以是抛出异常的情况
x = (function () { throw new Error('exception'); })();
// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop() {
    while (true) { }
}
//类型断言，类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。
//变量作用域
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log("全局变量为: " + global_num);
console.log(Numbers.sval); // 静态变量
var obj = new Numbers();
console.log("实例变量: " + obj.num_val);
//函数
function greet() {
    console.log("hello ");
}
function greet1(uname) {
    if (uname === void 0) { uname = "xiaoming"; }
    console.log("hello " + uname);
}
//剩余参数
//有一种情况，我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义。
//剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入。
function add() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i = 1;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + i;
    }
    return sum;
}
