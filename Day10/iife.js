(function(){
    console.log("Hello");
})();
((a,b)=>{
    console.log(a+b);
})(2,3);
(function demo(){
    console.log("Hello");
})();
//declaration array
let arr = [10,20,"hello",true,1n,undefined];
console.log(arr);
//using new keyword
let arr1 = new Array(10,20,"hello",true,1n,undefined);
console.log(arr1);

//object
console.log("Object");
let obj = {
    name:"abhi",
    id:1,
    arr:[10,20,30],
    Boolean : true,
    demo : function(){
        console.log("Hello");
    }
}
console.log(obj);
console.log(obj.name);
console.log(obj.id);
console.log(obj.arr);
console.log(obj.Boolean);
obj.demo();
function obj1(name,id){
    this.name = name;
    this.id = id;
}
let obj2 = new obj1("abhi",1);
console.log(obj2);
console.log(obj2.name);
console.log(obj2.id);
