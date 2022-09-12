var timerEl = document.querySelector(".timer");
var start = document.querySelector("#start")
var timeRemaining = 5;
var score = 0;
var index = 0;
var box = document.querySelector(".quizBox")
var incorrect = 10
var qEl = document.querySelector('p')
var footer = document.querySelector("footer")


hideBtns ()
// questions choices and answers for quiz
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


function hideBtns () {
    box.style.display = "none"
}


function presentQuestion(qEl) {
    box.style.display = "block"
    footer.style.display = "block"

   

    for (var i = 0; i < questions.length; i++)

    qEl.textContent = questions[0].questionTitle
  

    questions.choices.forEach(function(choice, index ){
    var button = document.querySelectorAll(".answers")
    button.textContent = choice
    console.log(choice)
    box.appendChild(button)
})
   
}

start.addEventListener("click", startGame);


function startGame() {

    // Sets interval in variable
    var timerInterval = setInterval(function () {
        timeRemaining--;
        timerEl.textContent = timeRemaining + " seconds remaining!";

        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            return;
        }

    }, 1000);
    document.getElementById("start").style.display = "none"

    
    presentQuestion(qEl)
    
}


function checkAnswer(){
    
}

start.setAttribute("style", "font-size: 40px; background-color: background-color:#6eccf0;; border: 10px solid #ffca2a;; border-radius: 15px;")

