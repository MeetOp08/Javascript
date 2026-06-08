// text=document.getElementById("text").getAttribute('id')
// text=document.getElementById("text").getAttribute('class')
//document.getElementById("heading").setAttribute('class','bihhead')

// title = document.getElementById("text")
// title.style.backgroundColor="green";
// title.style.padding=10px;

// title.innerHTML
//title.textContent
//title.innertext

// h1 = document.querySelector("h1")//take first h1
// h1 = document.querySelectorAll("h1")//take all query selector

// myul  = document.querySelector("ul");
// myul.querySelector("li");

// myli = document.querySelectorAll("li"); // [li,li,li] give nodelist

// myli.style.backgroundColor = "red"// wrong 
// myli.forEach((item)=>{
//     item.style.backgroundColor="red";//true
// })

// let listitem = document.getElementsByClassName("list-item");//undefined
// listitem//HTMLCollection(3) [li.list-item, li.list-item, li.list-item]

// listitem.forEach((item)=>{
//     item.style.color="red"
// })//error

//convert into array then 
// Array.from(listitem).forEach((item)=>{
//     item.style.color="red"
// })


// let parent = document.querySelector(".parent");
// // parent.children//HTMLCollection(3) [div.child, div.child, div.child]
// // parent.children[1]

// // for (let i = 0;parent.children.length;i++){
// //     console.log(parent.children[i].innerHTML);
// // }

// // parent.children[1].style.color = "orange";
// // parent.firstElementChild //<div class=​"child">​One​</div>​
// //parent.lastElementChild //<div class=​"child">​Three​</div>​
// parent.childNodes //NodeList(7) [text, div.child, text, div.child, text, div.child, text]
// one = document.querySelector(".child");//<div class=​"child">​One​</div>​
// one.parentElement //<div class=​"parent">​<div class=​"child">​One​</div>​<div class=​"child">​Two​</div>​<div class=​"child">​Three​</div>​</div>​
// one.nextElementSibling //<div class=​"child">​Two​</div>​

