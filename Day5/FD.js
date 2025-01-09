// function demo (a) {
//   console.log(a);
// }
// demo("hello");
// function sum (a, b) {
//   return a + b;
// }

// console.log("the sum of the numbers is :"+sum(10+10,10));
//create a function it should perform arthemetic operation for two numbers input should be taken from the user
// let a = parseInt(prompt("Enter the first number"));
// let b = parseInt(prompt("Enter the second number"));
// function arithmetic(a,b){
//   console.log("The sum of the numbers is :"+(a+b));
//   console.log("The difference of the numbers is :"+(a-b));
//   console.log("The product of the numbers is :"+(a*b));
//   console.log("The division of the numbers is :"+(a/b));
//   console.log("The increment of the number a is :"+(++a));
//   console.log("The decrement of the number b is :"+(--b));
// }
// arithmetic(a,b);
// function to find the largest of three numbers
// let a = parseInt(prompt("Enter the first number"));
// let b = parseInt(prompt("Enter the second number"));
// let c = parseInt(prompt("Enter the third number"));
// function largest(a,b,c){
//   if(a>b && a>c){
//     console.log("The largest number is :"+a);
//   }
//   else if(b>a && b>c){
//     console.log("The largest number is :"+b);
//   }
//   else{
//     console.log("The largest number is :"+c);
//   }
// }
// largest(a,b,c);
// let operator = function(a){
//   console.log(a);
//   console.log(arguments[1]);
//   console.log(arguments[2]);
// }
// operator(10,20,30);
//create a function expression to perform arthemetic operation for three numbers and find the largest of three numbers input should be taken from the user
let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));
let c = parseInt(prompt("Enter the third number"));
function arithmetic(a,b,c){
  console.log("The sum of the numbers is :"+(a+b+c));
  console.log("The difference of the numbers is :"+(a-b-c));
  console.log("The product of the numbers is :"+(a*b*c));
  console.log("The division of the numbers is :"+(a/b/c));
  console.log("The increment of the number a is :"+(++a));
  console.log("The decrement of the number b is :"+(--b));
  console.log("The decrement of the number c is :"+(--c));
}
arithmetic(a,b,c);
function largest(a,b,c){
  if(a>b && a>c){
    console.log("The largest number is :"+a);
  }
  else if(b>a && b>c){
    console.log("The largest number is :"+b);
  }
  else{
    console.log("The largest number is :"+c);
  }
}
largest(a,b,c);