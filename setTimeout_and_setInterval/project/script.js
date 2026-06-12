const text = document.querySelector("#text");
const constainer = document.querySelector("#container");
const startbtn = document.querySelector("#start");

let interval;

startbtn.addEventListener('click',()=>{
     interval = setInterval(()=>{
        randomColor()
    },20)
});
 
function randomColor(){
    const hex="0123456789ABCDEF";
    let percent = Math.floor(Math.random()*100) + "%";
    let color = "#"

    for (let i = 0 ; i<6 ; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    console.log(color);
    console.log(percent)
    constainer.style.backgroundColor = color ; 
    // constainer.style.borderRadius = percent;

    text.innerHTML=`<strong>Start</strong>`
}

const stopbtn = document.querySelector("#stop");

stopbtn.addEventListener('click',()=>{
    clearInterval(interval);
    interval = null;
    console.log("Stopped")
    text.innerHTML=`<strong>Click Start for Disco</strong>`
    //constainer.style.backgroundColor ="#ffff"
    // constainer.style.borderRadius = "0%"; 
    
});