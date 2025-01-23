console.log(window);
console.log(document);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title = "amazon";
console.log(document.body);
let img = document.images;
console.log(img);
for(let i =0; i<img.length; i++){
    console.log(img[i]);
    img[i].style.height = "200px";
    img[i].style.width = "200px";
    img[i].style.borderRadius = "100%";
    img[i].alt="image";
}
let a = document.getElementById("demo");
console.log(a);
console.log(a.textContent)
a.textContent = "group5"
a.style.backgroundColor = "red"
a.style.textAlign = "center"
