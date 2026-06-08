// const photo= document.querySelector("#image");
// photo.addEventListener("click",(e)=>{
//     console.log("clicked ul");
//     e.preventDefault()
//     e.stopPropagation();
// },true);

// const photo1 = document.querySelector("#photo1");
// photo1.addEventListener("click",(e)=>{
//     console.log("clicked photo 1");
    
// },true);

//false-true is called eventpraprogations

//time,timestamp , defaultPrevented
//target , toElement ,srcElement , currentTarget
// ClientX,ClientY,screenX,screenY

const photo1 = document.querySelector("#image");
photo1.addEventListener("click",(e)=>{
    // console.log(e);
    //  console.log(e.target);
    console.log(e.target.tagName);//give tagName
    console.log(e.target.id);//give id
    // console.log(e.target.parentNode);//gives <li>...</li> this is parent
    let removeit = e.target.parentNode
    // 1
    // removeit.remove();

    //2
    //removeit.parentNode.removeChild(removeit)
},true);