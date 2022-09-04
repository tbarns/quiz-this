var carousel = document.querySelector(".carouselbox");
var timerEl = document.querySelector(".timer");
var start = document.querySelector(".start")
var confirm = carousel.querySelector("#carousel");
var index = 0;
var currentquestion;

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


// var questions = [
//   "https://picsum.photos/300/200",
//   "https://picsum.photos/300/201",
//   "https://picsum.photos/300/202",
//   "https://picsum.photos/300/203"
// ];
//this background iamge isnt gonna work i need to investigate how to input my table/form/whatever it is
// carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

// function continueQuiz(direction) {
//   index = index + direction;
//   if (index < 0) { 
//     index = images.length - 1; 
//   } else if (index > images.length - 1) { 
//     index = 0;
//   }
//   currentQuestion = questions[index];
//   carousel.style.backgroundImage = "url('" + currentQuestion + "')";
// }

// // Clicking on image opens a new window containing the image
// carousel.addEventListener("click", function() {
//   window.location.href = images[index];
// });

// // Clicking on next button displays next image in carousel
// next.addEventListener("click", function(event) {
//   // Stops event from bubbling up and new window opening
//   event.stopPropagation();

//   navigate(1);
// });

// // Clicking previous displays previous image in carousel
// prev.addEventListener("click", function(event) {
//   // Event bubbling would occur and a new window would open if we did not include the following line of code.
//   event.stopPropagation();

//   navigate(-1);
// });

// navigate(0);
