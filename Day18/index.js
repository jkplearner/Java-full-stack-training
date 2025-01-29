let btn = document.getElementById("btn");
console.log(btn);
btn.onclick = ()=>{
    let search = document.getElementById("search").value;
    console.log(search);
    window.fetch(`https://pixabay.com/api/?key=48474849-be7d64363fc4e28837f9c10ba&q=${search}&image_type=photo&pretty=true&per_page=30`)
    .then((data) => data.json())
    .then((res)=>{
        // console.log(res);
        // console.log(res.hits);
        res.hits.map((x)=>{
            console.log(x);
            let demo = document.getElementById("demo");
            console.log(demo);
            demo.innerHTML += `<img src="${x.previewURL}" />`;
            
        })
    })
}