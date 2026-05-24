// //Number
// let score = "33";
// console.log(typeof(score));//string
// let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));//number
// let valueInNumber = +score;
//console.log(valueInNumber);//number

// //String
// let score = 33;
// console.log(typeof(score));//number
// let stringValue = String(score);
// console.log(typeof(stringValue));//string

// // Boolean
// let istrue ="" //false=>"",true=>"meet"
// istrue = 1;//number
// let booleanValue = Boolean(istrue);//boolean,true=>1,false=>0

// //NaN(Not a Number)
// let score  = "33ab";
// let valueInNumber =  Number(score);
// console.log(typeof(valueInNumber)); //number
// console.log(valueInNumber);//NaN

// //Null
// let score = null;
// console.log(typeof(score));//object
// console.log(score);//0


// /* Operations */
// //prefferedType 
// console.log("1" + 2);//12
// console.log(1 + "2");//12
// console.log("1" + 2 + 2);//122 ==> if preffereedType string then result string
// console.log(1 + 2 + "2");//32 ==> if prefferdType is number then i  result it gives number + string


//comparision

console.log( null == 0);//false
console.log( null >= 0);//true
/*
  because JavaScript handles == and comparison operators (>=, <=, >, <) differently.
  Why false?

        With ==, JavaScript has special rules.
        null is only loosely equal to:
        undefined
        So:

        null == undefined // true

        But:

        null == 0 // false

        Because JS does NOT convert null to 0 in loose equality.
    Why true?
        Comparison operators work differently.
        Before comparison, JavaScript converts null to a number.
        Number conversion of null:
        Number(null) // 0

        So JS does:

        0 >= 0

        Which is:

        true
       
*/

//Avoid loose equality (==) when possible. Use strict equality:  === 
    console.log(null === 0); // false
// === compare value with datatype also.