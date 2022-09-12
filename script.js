var timerEl = document.querySelector(".timer");
var start = document.querySelector("#start")
var timeRemaining = 5;
var index = 0;
var questionIndex= 0;
var score = 0;
var box = document.querySelector(".quizBox")
var incorrect = 10
var qEl = document.querySelector('p')



//questions choices and answers for quiz
var questions = [{
  questionTitle: "Who is Rupaul?",
  choices: ["Mother", "The Queen of Drag", "My inner saboteur", "All of the above"],
  answers: "All of the above"
},
{
  questionTitle: "Who should have been Blac Chyna?",
  choices: ["Nina Bo Nina Brown", "Valentina", "Charro", "Farrah Moan"],
  answers: "Farrah Moan"
},
{
  questionTitle: "Which country does NOT have a Drag Race franchise?",
  choices: ["Canada", "Thailand", "Holland", "Belarus"],
  answers: "4"
},
{
  questionTitle: "UK Hun is the name of a __________.",
  choices: ["style of drag", "chart topping song from the drag race", "traditional greeting of Liverpool", "slag for a wig"],
  answers: "2"
},
{
  questionTitle: "Who is Michelle Visage?",
  choices: ["a type of chair", "a New Jersey born circus performer", "Rupaul's best friend", "a fashion model"],
  answers: "3"
},
];





function presentQuestion (qEl) {

  var options = Array.from(document.querySelectorAll(".answers"))
  qEl.textContent = questions[0].questionTitle
  var currentQuestion = questions[questionIndex];
  options.textContent ='';
    options.textContent = questions[i].choices
    var userAnswer = questions[i].choices;
    // button.textContent = choices
    box.questionTitle[i] = qEl
    if (userAnswer == "questions[i].answers"){
    score++;
    }
    if (i > questions.length) {
      window.prompt(end)
    }


    questions.choices.forEach(function(choice){
      var btns = document.querySelectorAll(".answers")
      btns.textContent= choice
      box.innerHTML(choice)
    }
    )
    box.addEventListener("click", localStorage.setItem("test", JSON.stringify(questions.choices[0])))
    

 
    // currentQuestion.choices.forEach(function(choice, i){
    
    // options.textContent = i + 1 + ". " + choice;

    options.addEventListener("click", selectAnswer())
    
  // })
}

  function selectAnswer() {
    // if (this.value !== questions[questionIndex].answers) {
    //   timeRemaining -= incorrect;
    // if (timeRemaining < 0) {
    //   timeRemaining = 0
    // }
timerEl.textContent =timeRemaining;
  // }
  }

// for (var i=0; i < questions.length; i++){
  
//   var choices = Array.from(document.querySelectorAll(".answers"))
//   qEl.textContent = questions[i].questionTitle
//   choices.textContent = questions[i].choices
//     var userAnswer = questions[i].choices;
//     // button.textContent = choices
//     box.questionTitle[i] = qEl
//     if (userAnswer == "questions[i].answers"){
//     score++;
//     }
//     if (i > questions.length) {
//       window.prompt(end)
//     }


    // questions.choices.forEach(function(choice){
    //   var btns = document.querySelectorAll(".answers")
    //   btns.textContent= choice
    //   box.innerHTML(choice)
    //}
    //)
    // box.addEventListener("click", localStorage.setItem("test", JSON.stringify(questions.choices[0])))
    
    
  
  
 //}
// }
  
    start.addEventListener("click", startGame);
  //localStorage.setItem





//odd glitch with the timer going into the negative 
function startGame() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timeRemaining--;
      timerEl.textContent = timeRemaining + " seconds remaining!";
  
      if(timeRemaining === 0) {
        clearInterval(timerInterval);
        return;
      }
  
    }, 1000);
    presentQuestion (qEl)
  }
start.setAttribute("style", "font-size: 40px; background-color: background-color:#6eccf0;; border: 10px solid #ffca2a;; border-radius: 15px;")

