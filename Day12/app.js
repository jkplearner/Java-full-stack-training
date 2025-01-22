function main(m,n){
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(m) || isNaN(n)){
                return reject();
            }
                for(let i =m;i<=n;i++){
                    console.log(i);
                    
                }
            return resolve();
            
            },5000);
    })
    .then(()=>{
        console.log("The numbers are printed successfully");
    })
    .then(()=>{console.log(10*10);
    })
    .catch(()=>{
        console.log("error");
    })
    
}
main(1,5);
function sample(){
    console.log("no's printed");
    
}
sample();