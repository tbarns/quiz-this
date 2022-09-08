var timerEl = document.querySelector(".timer");
var start = document.querySelector(".start")
var timeRemaining = 5;
var index = 0;
var currentquestion= 0;
var score = 0;
var box = document.querySelector("#quizBox")

var questions = [{
  questionTitle: "Who is Rupaul?",
  choices: ["Mother", "The Queen of Drag", "My inner saboteur", "All of the above"],
  answer: "All of the above"
},
{
  questionTitle: "ADD A QUESTION2",
  choices: ["1", "2", "3", "4"],
  answer: "4"
},
{
  questionTitle: "ADD A QUESTION3",
  choices: ["1", "2", "3", "4"],
  answer: "4"
},
{
  questionTitle: "ADD A QUESTION4",
  choices: ["1", "2", "3", "4"],
  answer: "4"
},
{
  questionTitle: "ADD A QUESTION5",
  choices: ["1", "2", "3", "4"],
  answer: "4"
},
{
  questionTitle: "ADD A QUESTION6",
  choices: ["1", "2", "3", "4"],
  answer: "4"
},
{
  questionTitle: "ADD A QUESTION7",
  choices: ["1", "2", "3", "4"],
  answer: "4"
}];

var pEl = document.createElement('p')
var button = document.createElement("button")
pEl.textContent = questions[0].questionTitle

box.appendChild(pEl)


questions.choices.forEach(function(button, choice){
  var button = document.createElement("button")
  button.textContent= choice
  box.appendChild(button)
})
button.addEventListener("click", localStorage.setItem("test", JSON.stringify(questions.choices[0])))


// // FUNCTION that places the questionHolder information inot the proper section
// 	function setQuestionData () {
// 		queryElement('#quizBox p').innerHTML = questions[currentquestion].title;
// 		queryElement('#quizBox button:nth-of-type(1)').innerHTML = `1. ${questions[currentquestion].choices[0]}`;
// 		queryElement('#quizBox button:nth-of-type(2)').innerHTML = `2. ${questions[currentquestion].choices[1]}`;
// 		queryElement('#quizBox button:nth-of-type(3)').innerHTML = `3. ${questions[currentquestion].choices[2]}`;
// 		queryElement('#quizBox button:nth-of-type(4)').innerHTML = `4. ${questions[currentquestion].choices[3]}`;
//     queryElement('#quizBox button:nth-of-type(5)').innerHTML = `5. ${questions[currentquestion].choices[4]}`;
//     queryElement('#quizBox button:nth-of-type(6)').innerHTML = `6. ${questions[currentquestion].choices[5]}`;
//     queryElement('#quizBox button:nth-of-type(7)').innerHTML = `7. ${questions[currentquestion].choices[6]}`;

//   }
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
start.setAttribute("style", "font-size: 40px; background-color: background-color:#6eccf0;; border: 10px solid #ffca2a;; border-radius: 15px;")

