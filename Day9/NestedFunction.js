// function parent(){
//     function child(){
//         console.log("I am a child function")
//     }
//     child()
// }
// parent()
// var a = 10;
// let b = 20;
// function parent1(){
//     var a ="hello";
//     let b = "hi";
//     console.log(a);
//     console.log(b);
//     console.log(this.a);
//     console.log(this.b);
       
// }
// parent1();
//lexical scope
// function main(){
//     let a = 10;
//     function child(){
//         console.log(a);
//     }
//     child();
// }
// main();
//closure
function parent(){
    function child1(){
        console.log("I am child1");
        function child1_1(){
            console.log("I am child 3");
        }
        return child1_1;
    }
    function child2(){
        console.log("I am child2");
    }
    return [child1,child2];
    
}
parent()[0]()();
parent()[1]();