// //Object literals
// const user = {
//     name:"Meet Patel",
//     "gender":"Male",
//     age:21,
//     city:"Navsari",
//     mobile_no:[9574988029,9837784253]
// }

// console.log(user.name);
// console.log(user["name"]);//better way to access

// //change data

// user.age = 22;
// console.log(user["age"]);

let mykey = Symbol('Key1');

const user1 = {
    name:"jainil Patel",
    "gender":"Male",
    [mykey]:"keys",// accessing mykey so write in [mykey]. for mykey:"keys" ,mykey is consider to string
    age:21,
    city:"Ankleshwer",
    mobile_no:[9574988029,9837784253]
}
// console.log(user1);

// //not change data

// Object.freeze(user1);
// user1.city = "Navsari";

// console.log(user1["city"]);
// console.log(user1);

//add function in object

// user1.greeting = function(){
//     console.log("hello");
// }
// user1.greeting1 = function(){
//     console.log(`hello,${this.name}`);//this use for accessing property  of the container
// }

// console.log(user1.greeting);//[Function (anonymous)]
// console.log(user1.greeting());//hello ,undefined
// console.log(user1.greeting1());//hello,jainil Patel undefined

const user = {
    id : "123abc",
    username:{
        firstname:"Meet",
        lastname:"Patel"
    },
    age:21,
    gender:"Male",
    mobile:[9574988029,9737784253],
    address:{
        conutry:"India",
        state:"Gujarat",
        city:"Vadodara",
        pincode:396521
    }
}
// console.log(user.username.firstname);
// console.log(user.address.pincode);
// console.log(user["username"]["firstname"]);  

// const obj1 = Object.assign({},user,user1);//Copy the values of all of the enumerable
// //  own properties from one or more source objects to a target object. 
// //  Returns the target object.
// // if {}(empty obj) if not given then all the value mearge in first object.
// console.log(obj1);

// //or

// const obj1 = {...user,...user1}
// console.log(obj1);

// console.log(Object.keys(user));//return all keys
// console.log(Object.values(user));//return all values
// console.log(Object.entries(user));//return both keys and values
// //all the ans return in arrays

// console.log(user.hasOwnProperty('username')); // veriy keys are exist or not

// //objects de-structure

// const {username} = user;
// console.log(username);

// const {username:name} = user; //if long name exist then do : and give shrot name. 
// console.log(name);

// //API
 // // json structure(javasccript object notations)
// {
//     "name":"Meet",
//     "courseName":"MEARN STACK",
//     "price":"999/-"
// }