
// let btn = document.getElementById('demo');
// console.log(btn);
// btn.onclick=function(e){
//     console.log(e);
    
//     let res = Math.round(Math.random()*10000).toString(16);
//     console.log(res);
//     document.body.style.backgroundColor = `#${res}`;
// }
// let btn1 = document.getElementById('demo1');
// console.log(btn1);
// let c = window.prompt('Enter any color name');
// console.log(c);
// btn1.innerHTML = c;
// btn1.onmouseover=()=>{
//     document.body.style.backgroundColor = `${c}`;
//     document.body.style.transitionDuration = '3s';
// }


// let h = document.getElementById('demo2');
// console.log(h);
// let d = window.prompt('Enter any second color name');
// console.log(d);
// h.innerHTML = d;
// h.onmouseover=()=>{
//     document.body.style.backgroundColor = `${d}`;
//     document.body.style.transitionDuration = '3s';
// }
// let video = document.getElementById('demo3');
// console.log(video);
// video.addEventListener("click", ()=>{
//     let res = video.classList.toggle("demo");
//     if (res){
//         video.play();
//     }else{
//         video.pause();
//     }
// });
let demo = document.getElementById('demo4');
console.log(demo);
demo.addEventListener("click", ()=>{
    let demo3 = document.getElementById('demo3').value
    console.log(demo3);
    let speech = new SpeechSynthesisUtterance();
    console.log(speech);
    speech.text = demo3;
    speechSynthesis.speak(speech);
});
