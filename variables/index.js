// // Three types of variables on javascript:var, let, const.

// //  [1].var

// var name ="Meet";
// console.log(name);
// var name = "jainil";
// console.log(name);
// name = "jay";
// console.log(name);

// /* 
//    In var We can redeclare and reinitialize.
//    redeclare means var name.(means give variables to var,let const)
//    reinitilize means give value to variable. var name = "Meet"./
// */

// // [2].let

// let name= "Meet";
// console.log(name);
// // let name = "Jainil";
// // console.log(name);  ----->  gives already declared error
// name = "jay";
// console.log(name);

// /* 
//   In let variables we can not redeclare variables.(let name;)
//   but in let we can reinitilize the variables.(name = "Neet")
// */

// // [3].const
//     const name = "Meet";
//     console.log(name);
//     // const name = "jainil";
//     // console.log(name); ----->  gives already declared error
//     // name = "jay"
//     // console.log(name); -----> gives TypeError: Assignment to constant variable

// /*
//     In const variable we can not redeclare and reinitialize the variable
// */

// // [4].we can write variable like ...

// name = "Meet";
// age = 21;

// console.table([name,age]);