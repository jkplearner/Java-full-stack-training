let a = document.createElement('a');
console.log(a)
a.textContent = 'hello';
document.body.appendChild(a);
a.style.backgroundColor = 'red';
let b = document.getElementById('demo');
b.style.border = '5px solid black';
let ol =document.createElement('ol');
console.log(ol);
b.appendChild(ol);
let li = document.createElement('li');
ol.appendChild(li);
li.textContent = 'Node.js';
let li2 = document.createElement('li');
ol.appendChild(li2);
li2.textContent = 'React.js';
ol.setAttribute("type","A");
//create a table
let table = document.createElement('table');
table.setAttribute('border','2px solid black');
console.log(table);
document.body.appendChild(table);
//tr1
let tr = document.createElement('tr');
table.appendChild(tr);
let td = document.createElement('td');
td.textContent = 'HTML';
tr.appendChild(td);
let td2 = document.createElement('td');
td2.textContent = 'CSS';
tr.appendChild(td2);
let td3 = document.createElement('td');
td3.textContent = 'JS';
tr.appendChild(td3);

let td4 = document.createElement('td');
td4.textContent = 'React';
tr.appendChild(td4);
//give space between two rows
let br = document.createElement('br');
table.appendChild(br);
//tr2
let tr2 = document.createElement('tr');
table.appendChild(tr2);


let td5 = document.createElement('td');
td5.textContent = 'Node';
tr2.appendChild(td5);
let td6 = document.createElement('td');
td6.textContent = 'Express';
tr2.appendChild(td6);
let td7 = document.createElement('td');
td7.textContent = 'MongoDB';
tr2.appendChild(td7);
let td8 = document.createElement('td');
td8.textContent = 'Mongoose';
tr2.appendChild(td8);
