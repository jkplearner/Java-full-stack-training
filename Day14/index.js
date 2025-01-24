let a1 = document.getElementsByClassName("demo1")
console.log(a1);
console.log(a1[0]);
console.log(a1[1]);
console.log(a1[0].textContent);
console.log(a1[1].textContent)
a1[0].textContent="Hello-World"
a1[0].style.color = "red"

let b = document.getElementsByTagName("ol")
console.log(b);
console.log(b[0]); 
b[1].style.backgroundColor = "crimson"

let c = document.getElementsByName("demo2")
console.log(c);
console.log(c[0]);

let d = document.querySelector("#demo")
console.log(d);
let f = document.querySelector(".demo1")
console.log(f);
function event1(){
    alert("Hello World")
}