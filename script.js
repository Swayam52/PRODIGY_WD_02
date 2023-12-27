let sec = 0;
let min = 0;
let hr = 0;
let timer = null;

let displayTime = document.getElementById("displayTime")

const stopwatch = ()=>{
  sec++;
  if(sec == 60){
    sec = 0;
    min++;
    if(min == 60){
      min = 0;
      hr++;
    }
  }

  let h = hr < 10 ? "0"+hr : hr;
  let m = min < 10 ? "0"+min : min;
  let s = sec < 10 ? "0"+sec : sec;

  displayTime.innerHTML = h + ":" + m + ":" + s;
}

const startTimer = ()=>{
  if(timer !== null){
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

const stopTimer = ()=>{
  clearInterval(timer);
}

const resetTimer = ()=>{
  clearInterval(timer);
  sec = 0;
  min = 0;
  hr = 0;
  displayTime.innerHTML = "00:00:00";
}