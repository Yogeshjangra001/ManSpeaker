let dlt = document.querySelector(".delete");
let container= document.querySelector(".container")
let box = document.querySelector(".box")
let play = document.querySelector(".play")
let img = document.querySelector(".playbtn")
let video1 = document.querySelector(".vid")
let vdo = document.querySelector(".vdo")
let onImg = document.querySelector(".onimg")

let blank = true
play.addEventListener("click",()=>{
    if(!blank == false){
        video1.play()
        img.setAttribute("src","pause.jpg")
       
           blank = false
    }else{
        video1.pause()
        img.setAttribute("src","play.png")
        blank = true
    }
})
function start1(){
    if(video1.pause){
        video1.play()
        vdo.removeChild(onImg)
    }
    else{
        video1.pause()
    }
}

box.addEventListener("mouseenter",()=>{
    play.style.opacity = 1
    dlt.style.opacity = 1
})
box.addEventListener("mouseleave",()=>{
    play.style.opacity = 0.1
    dlt.style.opacity = 0.1
})























dlt.addEventListener("click",()=>{
    container.removeChild(box)
})