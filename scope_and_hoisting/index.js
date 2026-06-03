// // var a=10;
// let b=20;
// const c=30;

// {
//     var a = 100;
//     // let b=20;// ReferenceError: b is not defined
//     // const c=30;//ReferenceError: c is not defined
// }
// console.log(a);
// console.log(b);
// console.log(c);

//show ReferenceError: b ,c is not defined because the declaration is in the block.so ot of the scope it can not accessible.
//it is only occure for let and const,not for var.
//we can access var from any where.

// function one(){
//      let username = "Meet Patel"
//     function two(){
//         console.log(username);
//         let  work = "Devloper"
//     }
//     //console.log(work);//ReferenceError: work is not defined bcz work is defined inside function two() and it can not accessible out side this function.
//     two();
// }
// one();


// //hoisting

// function addOne(value){ 
//     return value + 1;
// }
// const addTwo  = function(value){
//     return value + 2;
// }
// console.log(addTwo(3));
// console.log(addOne(5));


// //Cannot access function before initialization
// console.log(addOne(5));// this will print
// function addOne(value){ 
//     return value + 1;
// }

// console.log(addTwo(3)); //ReferenceError: Cannot access 'addTwo' before initialization
// //bcz of hoisting you can not access 'addTwo' before initialization
// //and it is depend on how you initialize.

// const addTwo  = function(value){//This function is called function expression which is hold function in variable.
//     return value + 2;
// }

