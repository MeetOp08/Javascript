const promiseOne = new Promise((resolve,reject)=>{
    //do an task
    //DB calls, cryptography , network

    setTimeout(()=>{
        console.log("Task is complete");
        resolve();
    },1000)
})

promiseOne.then(()=>{
    console.log("Promise Consummed");
})

// new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("second task complete");
//         res();
//     },3000)
// }).then(()=>{
//     console.log("Async 2 recieved");
// })

// const promiseThree = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res({username:"Meet", email:"xyz@google.com"})
//     },100);
// });

// promiseThree.then((user)=>{
//     console.log(user);//print the what the res contain
// });

// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({username:"Meet", email:"xyz@google.com"})
//         }else{
//             reject("Something went wrong! Please try again")
//         }
//     },6000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("The promise ether resolve or reject");
// })

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({username:"Javascript", email:"xyz@google.com"})
//         }else{
//             reject("Something went wrong In JS!")
//         }
//     },3000);
// })

// async function consumePromiseFive(){
//     try{  
//     const response = await promiseFive
//     console.log(response);
// }
// catch(error){
//         console.log(error);
//     }
  
// }
// consumePromiseFive()
// //promise
// const promiseMain =  new Promise((res,rej)=>{
//     setTimeout(()=>{
//         const error = false;
//         if(!error){
//             res("This is promise Task");
//         }else{
//             rej("Task failed")
//         }
//     },2000)
// })

// promiseMain.then((response)=>{
//     console.log(response);
// }).then(()=>{
//     console.log("consume promise Main");
// }).catch((error)=>{
//     console.log(error);
// })

// //async-await
// //1.

// const asyncPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(true){
//              resolve("This is Promise");
//         }else{
//             reject("Error")
//         }
       
//     },3000)
// })
// async function taskPromise(){
//     try{
//         console.log("Starting...")
//         const response = await asyncPromise
//         console.log(response)
//         console.log("Thank you!")
//     }
//     catch(error){
//         console.log(error);
//     }
    
// }
// taskPromise()

// // 2.

 
async function taskPromise(){
    try{
        console.log("Starting...")
        const response = await new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    if(true){
                        resolve("This is Promise 2");
                    }else{
                        reject("Error")
                    }
                
                },1000)
})
        console.log(response)
        console.log("Thank you!")
    }
    catch(error){
        console.log(error);
    }
    
}
taskPromise()


fetch("https://api.github.com/users")//fetch will run first and then settimeout/setinterval will run
.then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error);
})
