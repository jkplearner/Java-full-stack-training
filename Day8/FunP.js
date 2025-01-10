// function main(a){
//     console.log(a);
//     console.log(a());
// }
// main (function(){
//     return "Iam cbf1";
// });
// main (function(){
//     return "Iam cbf2";
// });


// function main1(task) {
//     let a = Number(prompt("Enter the first number"));
//     let b = Number(prompt("Enter the second number"));
//     console.log(task(a, b));
// }

// main1(function(a, b) {
//     return a + b;
// });

// main1(function(a, b) {
//     return a - b;
// });

// main1(function(a, b) {
//     return a * b;
// });

// main1(function(a, b) {
//     return a / b;
// });


//chnage this such that we will tAKE PROMPT FOR EACH FUNCTION it should not print all the operatiosn at a time for each one it shoudl take promtp


// let a =() =>{
//     console.log("hello")
// }
// console.log(a);
// a();
let operation =(a,b,task) =>{
    console.log(task(a,b));
}
operation(a=Number(prompt("Enter the first number")),
b=Number(prompt("Enter the second number")),
(a,b)=>{
    return a+b;
});
operation(a=Number(prompt("Enter the first number")),
b=Number(prompt("Enter the second number")),
(a,b)=>{
    return a-b;
});
operation(a=Number(prompt("Enter the first number")),
b=Number(prompt("Enter the second number")),
(a,b)=>{
    return a*b;
});