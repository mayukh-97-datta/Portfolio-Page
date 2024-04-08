let dayNight=document.querySelector('.dayNight')
let banner=document.querySelector('.banner')

dayNight.addEventListener("click",function(){
    banner.classList.toggle("night")
})

let typingEffect=new Typed("#text",{
    strings:["Drop X Out","Youtuber","Coder"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
})