window.setTimeout(()=>{
    console.log("I am setTimeOut");
    
},5000)
window.setInterval(()=>{
    console.log("I am setInterval");
    
},3000)
function main(m,n){
    setTimeout(()=>{
        for(let i = m; i<=n; i++){
            console.log(i);
        }
    },5000)
}
main(1,100);
function sample(){
    console.log("no printed");
}
sample();

let online = window.navigator.onLine;
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(online == true){
            return resolve();
        }else{
           return  reject();
        }
    },2000)
}).then((message)=>{
    console.log("online");
}
).catch((message)=>{
    console.log("offline");
})