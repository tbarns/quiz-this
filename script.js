var timerEl = document.querySelector(".timer");
var start = document.querySelector("#start")
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
  questionTitle: "Who should have been Blac Chyna?",
  choices: ["Nina Bo Nina Brown", "Valentina", "Charro", "Farrah Moan"],
  answer: "Farrah Moan"
},
{
  questionTitle: "Which country does NOT have a Drag Race franchise?",
  choices: ["Canada", "Thailand", "Holland", "Belarus"],
  answer: "4"
},
{
  questionTitle: "UK Hun is the name of a __________.",
  choices: ["style of drag", "chart topping song from the drag race", "traditional greeting of Liverpool", "slag for a wig"],
  answer: "2"
},
{
  questionTitle: "Who is Michelle Visage?",
  choices: ["a type of chair", "a New Jersey born circus performer", "Rupaul's best friend", "a fashion model"],
  answer: "3"
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


for (var i=0; i < questions.length; i++){
    var currentquestion = questions[i].questionTitle
    var userAnswer = questions[i].choices
    if (userAnswer == "questions[i].answer"){
    score++;
    }
    if (i > questions.length) {
      window.prompt(end)
    }
  
  
  }
  
  
  


// questions.choices.forEach(function(choice){
//   var btns = document.createElement("#quizBox")
//   btns.textContent= choice
//   box.appendChild(choice)
// // })
// box.addEventListener("click", localStorage.setItem("test", JSON.stringify(questions.choices[0])))


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

