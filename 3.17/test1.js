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
