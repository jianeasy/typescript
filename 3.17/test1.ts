var message:string = "hello world";
console.log(message);
//面向对象
class Person{
    name():void{
        console.log("xiaoming");
    }
}
var p1 = new Person();
p1.name();
//数据类型
//数组
let arr1:number[] = [1, 2];
//数组泛型
let arr2:Array<number> = [1, 2];
//元组
let x:[string, string];
x = ["name","小明"];
console.log(x[0]);  