let sec = 0;
let min = 0;
let hr = 0;
let timer = null;
let lapTimes = [];
let laps = [];

let displayTime = document.getElementById("displayTime");
let lapList = document.getElementById("lapList");

document.getElementById("pause").style.display = "none";
document.getElementById("reset").style.display = "none";
document.getElementById("lap").style.display = "none";

//logic for timer
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

//start the timer
const startTimer = ()=>{                                          
  if(timer !== null){
    clearInterval(timer);
  }
  document.getElementById("start").style.display = "none";
  document.getElementById("pause").style.display = "block";
  document.getElementById("reset").style.display = "block";
  document.getElementById("lap").style.display = "block";
  timer = setInterval(stopwatch, 1000);
}

//pause the timer
const pauseTimer = ()=>{                                         
  document.getElementById("start").style.display = "block";
  document.getElementById("pause").style.display = "none";
  clearInterval(timer);
}

//reset the timer
const resetTimer = ()=>{                                          
  document.getElementById("start").style.display = "block";
  document.getElementById("pause").style.display = "none";
  document.getElementById("reset").style.display = "none";
  document.getElementById("lap").style.display = "none";
  clearInterval(timer);
  sec = 0;
  min = 0;
  hr = 0;
  lapTimes = [];
  displayTime.innerHTML = "00:00:00";
  updateLapList();
}

// logic for lap
const addLap = () => {
  let lap_h = hr < 10 ? "0"+hr : hr;
  let lap_m = min < 10 ? "0"+min : min;
  let lap_s = sec < 10 ? "0"+sec : sec;

  const lapTime = lap_h + ":" + lap_m + ":" + lap_s;
  lapTimes.push(lapTime);
  updateLapList();
};

// lap list logic
const updateLapList = () => {
  lapList.innerHTML = "";
  lapTimes.forEach((lap, index) => {
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${index + 1}: ${lap}`;
    lapList.prepend(lapItem);
  });
};