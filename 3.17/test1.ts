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
//void类型，用于标识返回值的类型，表示该方法没有返回值
function hello():void{
    console.log("hello world");
}
//Any类型，任意类型
//变量的值会动态改变时，比如来自用户的输入，任意值类型可以让这些变量跳过编译阶段的类型检查
let a:any = 1;
a = 'apple';
a = false;

let arrList: any[] = [1, "hello", false];
arrList[1] = 100;
//联合类型
let b:number | null | undefined | string;//一个变量可以出现多个类型
b = 1;
b = null;
b = undefined;
b = "aaaa";

//never类型
//never 是其它类型（包括 null 和 undefined）的子类型，
//代表从不会出现的值。这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环）
let c:never;
let d:number;

//c = 123;//报错，数字类型不能转为 never 类型
// 返回值为 never 的函数可以是抛出异常的情况
x = (()=>{ throw new Error('exception')})();
// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
    while (true) {}
}
//类型断言，类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。


//变量作用域
var global_num = 12          // 全局变量
class Numbers { 
   num_val = 13;             // 实例变量
   static sval = 10;         // 静态变量
   
   storeNum():void { 
      var local_num = 14;    // 局部变量
   } 
} 
console.log("全局变量为: "+global_num)  
console.log(Numbers.sval)   // 静态变量
var obj = new Numbers(); 
console.log("实例变量: "+obj.num_val)

//函数
function greet():void{
    console.log("hello ");
}
function greet1(uname:string = "xiaoming"):void{//可以为参数指定默认值
    console.log("hello "+uname);
}
//剩余参数
//有一种情况，我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义。
//剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入。
function add(...nums:number[]):number{
    let i = 1;
    let sum:number = 0;
    for(i = 0;i < nums.length; i++){
        sum = sum + i;
    }
    return sum;
}
//typescript类
class Car{
    //字段
    engine:string;
    //构造函数
    constructor(engine:string){
        this.engine = engine;
    }
    //方法
    disp():void{
        console.log("发动机为："+this.engine);
    }
}
let car1 = new Car("engine1");
console.log(car1.engine);//访问属性
car1.disp();//访问类