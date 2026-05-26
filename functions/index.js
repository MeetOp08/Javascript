// const name = function(){
//     console.log("I am function");
// }
// console.log(typeof name);
// console.log(name);
// name()


// function greet(){
//     console.log("Hello");
// }
// console.log(typeof greet);
// console.log(greet);
// greet()

// const greeting = ()=>{
//     console.log("I am arrow function");
// }
// console.log(typeof greeting);
// console.log(greeting);
// greeting()

// // all this functions type is function
// // this name,greet and greeting without () became reference. it is tell functionis exist.
// // this name() , greet() and greeting() are the call for function execution.

// function addNumbers(num1 , num2){ // here in  ( ) given value called perameters
//     console.log(num1 + num2);
// }
// addNumbers(3,4);//here in ( ) given number called arrgument

// difference between console and return

// //console
// function multiNumbers(num1 , num2){ 
//     console.log(num1 * num2);//12
// }
//const result = multiNumbers(3,4);
// console.log(result);//undefined

// //return
// function addNumbers(num1 , num2){ 
//     return num1 + num2;
// }
// const addresult = addNumbers(3,4);
// console.log(addresult);//7

// function loginUser(name){
//     return `${name} just logged in.`;
// }
//loginUser("Meet")// here not print value.
// console.log(loginUser("Meet"));  // in return print ans we have to write console.log(loginUser('Meet)) .


// //rest operater: used for pass multiple perameter in function 

// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(100,200,300));//give ans in array

// // object in fuction
// const product = {
//     productName:"oats",
//     price:171
// }
// function cartPrice(anyObject){
//     console.log(`the product is ${anyObject.productName} and product price is ${anyObject.price}`)
// }
// cartPrice(product);

// //Array on fuction

// const oats = [100,200,300,400]
// function oatsPrice(anyProduct){
//     return anyProduct[1];
// }
// console.log(oatsPrice(oats));