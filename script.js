let input=document.querySelector(".input")
let attempts=document.querySelector(".attempts")
let hint=document.querySelector(".hint")
let check=document.querySelector(".check")
let newg=document.querySelector(".newg")
let answer=getRandom(1, 10)
let attemptnum=3

check.onclick=function(){
    // create var and put value from input
    let usernum=input.value
    if (usernum==answer){
        alert("You are right!")
    } 
    
    else if(usernum>answer){
        hint.innerHTML="Your number is too high"
        attemptnum=attemptnum-1
        attempts.innerHTML=attemptnum
    }
    
    else if(usernum<answer){
        hint.innerHTML="Your number is too low"
        attemptnum=attemptnum-1
        attempts.innerHTML=attemptnum
    }
    
    if (attemptnum==0){
        input.disabled=true
        check.disabled=true
    }
input.value=""
}

newg.onclick=function(){
    input.disabled=false
    check.disabled=false
    attemptnum=3
    attempts.innerHTML=attemptnum
    hint.innerHTML="Here"
    answer=getRandom(1, 10)
}

function getRandom(min, max){
    let result=Math.floor(Math.random() * (max - min + 1)) + min;
    console.log (result)
    return result
}
