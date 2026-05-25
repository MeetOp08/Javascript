// let arr = [1,3,2,4,6,2]

// console.log(arr.at(3));//for check avlue at specific index
// console.log(arr.includes(3));
// console.log(arr.indexOf(4));

// console.log(arr.indexOf(22));//-1 for not exist index
// console.log(arr);
// let sliceArr = arr.slice(3,6)//In slice original array remain same
// console.log(sliceArr);
// console.log("SliceArr:",arr);//original Arr:[1,3,2,4,6,2]

// let spliceArr = arr.splice(3,6);//In splice changes original array 
// console.log(spliceArr);
// console.log("SpliceArr:",arr);//original Arr:[1,3,2]

// console.log(arr.filter((num)=>{
//     return num > 3;
// }))

// console.log(arr.map((num)=>{
//     return num * 2;
// }));
// console.log(arr);

//mearge array
// let marvel = ["ironman","captain america","thor"]
// let dc = ["superman","batman","wonder women"]

// marvel.push(dc)// it is return new array
// console.log(marvel);

// let concatHeroes=marvel.concat(dc);
// console.log(concatHeroes);

// let allHeroes = [...marvel,...dc];
// console.log(allHeroes);

// const anotherArr=[1,2,3,4,[6,7],5,6,[3,4,5,[1,2,3]],7,8]
// let flatArray = anotherArr.flat(Infinity);//give subarray into one array
// console.log(flatArray)

//string =>array

// console.log(Array.isArray("Meet"));//check is it Array?
// console.log(Array.from("MeetPatel"))//convert string to array

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1,score2,score3));// of just like from but is return new array.In of multiple data combaine and convert into Array