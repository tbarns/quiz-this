var timerEl = document.querySelector(".timer");
var start = document.querySelector(".start")

var timeRemaining = 5;

var start = document.getElementById("start");

start.addEventListener("click", startTime);


//odd glitch with the timer going into the negative 
function startTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timeRemaining--;
      timerEl.textContent = timeRemaining + " seconds remaining!";
  
      if(timeRemaining === 0) {
        clearInterval(timerInterval);
        return;
      }
  
    }, 1000);
  }
start.setAttribute("style", "font-size: 40px; background-color: pink; border: 10px solid green; border-radius: 15px;")