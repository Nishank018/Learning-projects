const promiseOne = new Promise((reslove, reject)=>{
    //Do an async task 
    //DB calls, cryptography , netwrok 
    setTimeout(function(){
        console.log("asyn task is complted ");
        reslove()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})