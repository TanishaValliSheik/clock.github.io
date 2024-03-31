const hourE1= document.getElementById("hours")
const minutesE1= document.getElementById("minutes")
const secondsE1= document.getElementById("seconds")
const ampmE1= document.getElementById("ampm")

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h>12){
        h = h-12;
        ampm = "PM"
    }

    h<10? h="0"+h: h=h
    m<10? m="0"+m: m=m
    s<10? s="0"+s: s=s
    hourE1.innerText = h;
    minutesE1.innerText= m;
    secondsE1.innerText = s;
    ampmE1,(innerText = ampm);
    setTimeout(()=>{updateClock()},100)
}

    updateClock();