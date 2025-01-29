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
    res.map((item)=>{
        console.log(item);
        document.body.innerHTML += `<h1>${item.name}</h1>`
        document.body.innerHTML += `<h1>${item.id}</h1>`
        document.body.innerHTML += `<h1>${item.designation}</h1>`
    })
})
// let demo =async()=>{
//     let response = await fetch("data.json");
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     data.map((item)=>{
//         console.log(item);
//         document.body.innerHTML += `<h1>${item.name}</h1>`
//         document.body.innerHTML += `<h1>${item.id}</h1>`
//         document.body.innerHTML += `<h1>${item.designation}</h1>`
//     })
// }
//  demo();   