// //for loop
// for(let i = 0; i<=10;i++){
//     console.log(i);
// }

// //while loop
// let i =0;
// while(i<5){
//     console.log(i)
//     i++;
// }

// //do-while loop
// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<6)

//Array/strings  base loop
// let heros = ["ironman","hulk","hawkeye","loki"];
// let greeting = "Welcome, Meet Patel"

// 1.for of(print value)

// for(let i of heros){
//     console.log(i);//return value in string
// }

// for(let i of greeting){
//     console.log("each word:",i);
// }

// //map
// const map = new Map();
// map.set('gujarat','ahemdabad');
// map.set('maharastra','mumbai');
// map.set('rajasthan','udaipur');
// map.set('maharastra','mumbai');//duplicate not print again
//set used for set value and store it like key=>value pair,no duplicate value
// console.log(map);
// console.log(map.entries());

// for(let key of map){
//     console.log(key);//this will give key and value both
// }

// for (let [key,value] of map){
//     console.log(key);//this will give only key or value base on what you print
// }

// //error:for object [key,value] this method will not itterable

//2.for in (because of above error for in used for object)

// const greet={
//     name:"Meet",
//     age:21,
//     gender:"Male"
// }

// let heros = ["ironman","hulk","hawkeye","loki"];
// for(let i in greet){
//     console.log(i);//this will give keys only
// }

// for (let key in greet){
//     console.log(key,":",greet[key]);//this will print key and value
// }

// for (let i in heros){
//     console.log(i);//this will give index
// }

// for (let i in heros){
//     console.log(heros[i]);//print value in string
// }

// +++ Note:differece between for of and for in is ....
// for of return value 
// for in return index
// for in is not working for map bcz map is not itterable.

//3. forEach

// const coding = ["python","java","javascript","ruby"];

// coding.forEach((value)=>{
//     console.log(value + "hi");//return values in string
// });

// // Object in array [{}]
// const myCoding = [
//     {
//         languageName : "java",
//         languageFileName : "java"
//     },
//     {
//         languageName : "python",
//         languageFileName : "py"
//     },
//     {
//         languageName : "javaScript",
//         languageFileName : "js"
//     }
// ];

// myCoding.forEach((item)=>{
//     console.log(item.languageName);
// })