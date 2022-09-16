var timerEl = document.querySelector(".timer");
var start = document.querySelector("#start")
var timeRemaining = 65;
var score = 0;
var index = 0;
var box = document.querySelector(".quizBox")
var incorrect = 10
var qEl = document.querySelector('p')
var footer = document.querySelector("footer")
// var choices = questions.choices
var buttons = document.createElement('button')

hideBtns()
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

//function to hide buttons upon opening page.  I want to avoid doing this have the buttons be created on JS but i cant figure that out yet.
function hideBtns() {
    box.style.display = "none"
}

//this function unhides the quiz and encouraging footer and add the text of the question into the quiz.
function presentQuestion(qEl) {
    box.style.display = "block"
    footer.style.display = "block"
  

    buttons.textContent = "";

    for (var i = 0; i < questions.length; i++)

    qEl.textContent = questions[0].questionTitle
    UserChoices =questions[index].choices
    UserChoices.forEach(function(newChoice){
        
        buttons.textContent =newChoice
        box.appendChild(buttons)
        //add event lister to check answer
        buttons.addEventListener("click", checkAnswer)

    })





    // i was trying to write a for loop to push the possible answers in my array into the buttons but I cant figure it out
    // questions.choices.forEach(function(choice, index ){
    // var button = document.querySelectorAll(".answers")
    // button.textContent = choice
    // console.log(choice)
    // box.appendChild(button)
    // })

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

//this function checks the asnwer for Q 1.  ideally i would have a rule that checks them all and i dont have to write multiple functions but i havent figured that out yet
function checkAnswer(event) {
    var element =event.target;
    if (element.matches("answers"))
        var textBox =document.createElement("h3")
        // textBox.setAttribute("id", "textBox")
        if(element.textBox == questions[index].answers){
            textBox.textContent="werk!"
        
    } else {
        
        timeRemaining -= 10
    
}
    if(index>= questions.length){
    return}
    else{
        presentQuestion(index)

}}
// this sets the style for my start button
start.setAttribute("style", "font-size: 40px; background-color: background-color:#6eccf0;; border: 10px solid #ffca2a;; border-radius: 15px;")

