// let onj ={
//     name: "John",
//     age: 30,
//     city: "New York"
// }
// let myJSON = JSON.stringify(onj);
// console.log(myJSON);
// let myObj = JSON.parse(myJSON);
// console.log(myObj);
window.fetch("data.json")
.then(response => response.json())
.then((res)=>{
    console.log(res);
    console.log(res[0]);
    
})